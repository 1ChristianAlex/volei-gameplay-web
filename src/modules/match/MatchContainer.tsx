import { Outlet, useNavigate } from '@solidjs/router';
import { Component } from 'solid-js';
import SwitchButton from '@components/inputs/SwitchButton';
import { APP_ROUTES } from '@app/AppRoutes.enum';

const MatchContainer: Component = () => {
  const navigate = useNavigate();
  return (
    <>
      <Outlet />
      <SwitchButton
        onSwitchChange={(on) =>
          navigate(
            `${APP_ROUTES.MATCH}${on ? APP_ROUTES.CALENDAR : APP_ROUTES.GAME_LIST}`
          )
        }
      />
    </>
  );
};

export default MatchContainer;
