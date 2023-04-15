import LoginPage from '@modules/auth/LoginPage';
import JoinGamePage from '@modules/join/JoinGamePage';
import { Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';

const AppRoutes: Component = () => {
  return (
    <Routes>
      <Route path="/" component={LoginPage} />
      <Route path="/join" component={JoinGamePage} />
    </Routes>
  );
};

export default AppRoutes;
