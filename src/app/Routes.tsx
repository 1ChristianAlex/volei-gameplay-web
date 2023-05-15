import LoginPage from '@modules/auth/LoginPage';
import JoinGamePage from '@modules/join/JoinGamePage';
import CalendarContainer from '@modules/match/Calendar/CalendarContainer';
import { Route, Routes, Navigate } from '@solidjs/router';
import { Component } from 'solid-js';
import { APP_ROUTES } from './AppRoutes.enum';
import UserHeader from '@modules/common/Header/UserHeader';
import GamesList from '@modules/match/GamesList/GamesList';
import MatchContainer from '@modules/match/MatchContainer';

const AppRoutes: Component = () => (
  <Routes>
    <Route path={APP_ROUTES.LOGIN} component={LoginPage} />
    <Route path={APP_ROUTES.INDEX} component={UserHeader}>
      <Route path={APP_ROUTES.JOIN} component={JoinGamePage} />
      <Route
        path={APP_ROUTES.MATCH}
        element={
          <Navigate href={() => [APP_ROUTES.MATCH, APP_ROUTES.CALENDAR].join('')} />
        }
      />
      <Route path={APP_ROUTES.MATCH} component={MatchContainer}>
        <Route path={APP_ROUTES.CALENDAR} component={CalendarContainer} />
        <Route path={APP_ROUTES.GAME_LIST} component={GamesList} />
      </Route>
    </Route>
  </Routes>
);

export default AppRoutes;
