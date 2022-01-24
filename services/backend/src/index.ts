import express from "express";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

import { routes as restRoutes } from "server/rest";
import { routes as graphqlRoutes } from "server/graphql/routes";
import postgraphile from "server/graphql/postgraphile";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(cors());
}
app.use(postgraphile);

[...restRoutes, ...graphqlRoutes].forEach(({ path, routers }) => {
  routers.forEach((router) => {
    app.use(path, router);
  });
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  const address = server.address();
  if (address && typeof address !== "string") {
    const href = `http://localhost:${address.port}/graphiql`;
    console.log(`PostGraphiQL available at ${href} 🚀`);
  } else {
    console.log(`PostGraphile listening on ${address} 🚀`);
  }
});
