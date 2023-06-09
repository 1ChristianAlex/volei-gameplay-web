import { common } from '@suid/material/colors';
import { createTheme } from '@suid/material/styles';
import createStyled from '@suid/system/createStyled';

const theme = createTheme({
  palette: {
    primary: {
      main: '#395597',
      contrastText: common.white,
      dark: '#1A2747',
    },
    secondary: {
      main: '#FF9500',
      contrastText: common.white,
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#333',
    },
    success: {
      contrastText: common.white,
      main: '#399753',
    },
  },
  typography: {
    fontFamily: 'Archivo, sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  spacing: 8,

  components: {
    MuiButton: {
      defaultProps: {
        style: {
          'text-transform': 'none',
          'min-height': '50px',
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        style: {
          display: 'flex',
        },
      },
    },
  },
});

const styledApp = createStyled({ onUseTheme: () => theme });

export { styledApp, theme };
