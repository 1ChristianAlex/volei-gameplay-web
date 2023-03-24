import { Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';
import AuthContainer from '../modules/auth/AuthContainer';

const AppRoutes: Component = () => {
  return (
    <Routes>
      <Route path="/" component={AuthContainer} />
    </Routes>
  );
};

export default AppRoutes;
