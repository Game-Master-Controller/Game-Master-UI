import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9d0a0e'
    },
    secondary: {
      main: '#262626'
    },
    background: {
      default: '#e7e7db',
      paper: '#9d0a0e'
    },
    text: {
      primary: '#9d0a0e',
      secondary: '#262626'
    }
  }
});

export default Theme;
