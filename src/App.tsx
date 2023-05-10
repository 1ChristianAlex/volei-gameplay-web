import type { Component } from 'solid-js';
import { ThemeProvider } from '@suid/material/styles';
import { MyThemeComponent } from './theme/GlobalStyles';
import { Router } from '@solidjs/router';
import './theme/reset.css';
import AppRoutes from '@app/Routes';
import { theme } from '@theme/theme';
import { MetaProvider, Title } from '@solidjs/meta';

const App: Component = () => (
  <ThemeProvider theme={theme}>
    <MetaProvider>
      <Title>Volaje</Title>
      <MyThemeComponent>
        <Router>
          <AppRoutes />
        </Router>
      </MyThemeComponent>
    </MetaProvider>
  </ThemeProvider>
);

export default App;
