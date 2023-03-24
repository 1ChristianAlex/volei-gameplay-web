import { red, grey } from '@suid/material/colors';
import { createTheme } from '@suid/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: grey[500],
    },
    background: {
      default: '#1a1a1a',
      paper: grey[200],
    },
    text: {
      primary: '#ffffff',
      secondary: grey[500],
    },
  },
});

export default theme;
