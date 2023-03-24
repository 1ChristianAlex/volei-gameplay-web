import { blue, orange, common } from '@suid/material/colors';
import { createTheme } from '@suid/material/styles';
import createStyled from '@suid/system/createStyled';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
      contrastText: common.white,
    },
    secondary: {
      main: orange[600],
      contrastText: common.white,
    },
    background: {
      default: '#f2f2f2',
    },
    text: {
      primary: '#333',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },

  components: {
    MuiButton: {
      defaultProps: {
        style: {
          'text-transform': 'none',
          'min-height': '50px',
        },
      },
    },
  },
});

const styledApp = createStyled({ onUseTheme: () => theme });

export { styledApp, theme };
