import type { Component } from 'solid-js';
import { ThemeProvider } from '@suid/material/styles';
import { MyThemeComponent } from './theme/GlobalStyles';
import { Router } from '@solidjs/router';
import './theme/reset.css';
import AppRoutes from '@app/Routes';
import { theme } from '@theme/theme';

const App: Component = () => (
  <ThemeProvider theme={theme}>
    <MyThemeComponent>
      <Router>
        <AppRoutes />
      </Router>
    </MyThemeComponent>
  </ThemeProvider>
);

export default App;
