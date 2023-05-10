import LoginPage from '@modules/auth/LoginPage';
import JoinGamePage from '@modules/join/JoinGamePage';
import MatchCalendar from '@modules/match-calendar/MatchCalendar';
import { Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';
import { APP_ROUTES } from './AppRoutes.enum';
import UserHeader from '@modules/common/Header/UserHeader';

const AppRoutes: Component = () => (
  <Routes>
    <Route path={APP_ROUTES.LOGIN} component={LoginPage} />
    <Route path={APP_ROUTES.INDEX} component={UserHeader}>
      <Route path={APP_ROUTES.JOIN} component={JoinGamePage} />
      <Route path={APP_ROUTES.MATCH_CALENDAR} component={MatchCalendar} />
    </Route>
  </Routes>
);

export default AppRoutes;
