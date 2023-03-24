import type { Component } from 'solid-js';

import theme from './theme/theme';
import { ThemeProvider } from '@suid/material/styles';
import { MyThemeComponent } from './theme/GlobalStyles';
import AppRoutes from './app/Routes';
import { Router } from '@solidjs/router';
import './theme/reset.css';

const App: Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <MyThemeComponent>
        <Router>
          <AppRoutes />
        </Router>
      </MyThemeComponent>
    </ThemeProvider>
  );
};

export default App;
