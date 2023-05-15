import { Outlet, useNavigate, useLocation } from '@solidjs/router';
import { Component } from 'solid-js';
import SwitchButton from '@components/inputs/SwitchButton';
import { APP_ROUTES } from '@app/AppRoutes.enum';

const MatchContainer: Component = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Outlet />
      <SwitchButton
        onSwitchChange={(isSwithOn) =>
          navigate(isSwithOn ? APP_ROUTES.CALENDAR : APP_ROUTES.GAME_LIST)
        }
        defaultIsSwitchOn={location.pathname.includes(APP_ROUTES.CALENDAR)}
      />
    </>
  );
};

export default MatchContainer;
