import { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";

const sharedThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: ["sans-serif"].join(","),
  },
};

export const theme = createTheme({
  ...sharedThemeOptions,
});

export const darkTheme = createTheme({
  ...sharedThemeOptions,
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    background: {
      default: "#FCF9F6",
    },
  },
});
