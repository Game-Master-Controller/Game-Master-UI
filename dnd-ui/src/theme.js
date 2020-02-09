import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9d0a0e"
    },
    secondary: {
      main: "#ffffff"
    },
    background: {
      default: "#e7e7db",
      paper: "#9d0a0e"
    },
    text: {
      primary: "#9d0a0e",
      secondary: "#262626"
    }
  },
  overrides: {
    MuiInputLabel: {
      // Name of the component ⚛️ / style sheet
      root: {
        fontStyle: "italic",
        fontSize: "1.1em"
      }
    }
  }
});

export default Theme;
