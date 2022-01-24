import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import reducers, { enqueueSnackbar, logout } from "store";

import { theme } from "./theme";
import Root from "./Root";

import "index.css";

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  // DEV
  // const { createLogger } = require("redux-logger");
  // const logger = createLogger();
  // middlewares.push(logger);
}

const persistConfig = {
  key: "flare-dispatch-v1",
  whitelist: ["auth", "version", "i18n", "filters"],
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));
(window as any).__store__ = store;
const persistor = persistStore(store);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err.extensions.code) {
        // Apollo Server sets code to UNAUTHENTICATED
        // when an AuthenticationError is thrown in a resolver
        case "UNAUTHENTICATED": {
          (window as any).__store__.dispatch(
            enqueueSnackbar({
              message: "Sesija je istekla. Molimo, prijavite se ponovo.",
              options: {
                variant: "error",
              },
            })
          );
          (window as any).__store__.dispatch(logout());
          // // Modify the operation context with a new token
          // const oldHeaders = operation.getContext().headers;
          // operation.setContext({
          //   headers: {
          //     ...oldHeaders,
          //     authorization: getNewToken(),
          //   },
          // });
          // // Retry the request, returning the new observable
          // return forward(operation);
        }
      }
    }
  }

  // To retry on network errors, we recommend the RetryLink
  // instead of the onError link. This just logs the error.
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
});

// If you provide a link chain to ApolloClient, you
// don't provide the `uri` option.
const client = new ApolloClient({
  // The `from` function combines an array of individual links
  // into a link chain
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <ApolloProvider client={client}>
                <Root />
              </ApolloProvider>
            </LocalizationProvider>
          </PersistGate>
        </Provider>
      </CssBaseline>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

declare const module: { hot: any };
if (module.hot) {
  module.hot.accept("./Root", () => {
    const HotApp = require("./Root").default;
    ReactDOM.render(<HotApp />, document.getElementById("root"));
  });
}
