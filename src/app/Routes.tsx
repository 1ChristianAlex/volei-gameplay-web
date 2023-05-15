import CalendarContainer from '@modules/match/Calendar/CalendarContainer';
import { Route, Routes, Navigate } from '@solidjs/router';
import { Component } from 'solid-js';
import { APP_ROUTES } from './AppRoutes.enum';
import UserHeader from '@modules/common/Header/UserHeader';
import GamesList from '@modules/match/GamesList/GamesList';
import MatchContainer from '@modules/match/MatchContainer';
import LoginPage from '@modules/auth/Login/LoginPage';
import LoggedUser from '@modules/auth/LoggedUser/LoggedUser';

const AppRoutes: Component = () => (
  <Routes>
    <Route path={APP_ROUTES.LOGIN} component={LoginPage} />
    <Route path={APP_ROUTES.INDEX} component={LoggedUser}>
      <Route path={APP_ROUTES.INDEX} component={UserHeader}>
        <Route
          path={APP_ROUTES.INDEX}
          element={<Navigate href={() => APP_ROUTES.CALENDAR} />}
        />
        <Route path={APP_ROUTES.INDEX} component={MatchContainer}>
          <Route path={APP_ROUTES.CALENDAR} component={CalendarContainer} />
          <Route path={APP_ROUTES.GAME_LIST} component={GamesList} />
        </Route>
      </Route>
    </Route>
  </Routes>
);

export default AppRoutes;
