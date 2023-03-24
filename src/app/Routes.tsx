import LoginPage from '@modules/auth/LoginPage';
import { Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';

const AppRoutes: Component = () => {
  return (
    <Routes>
      <Route path="/" component={LoginPage} />
    </Routes>
  );
};

export default AppRoutes;
