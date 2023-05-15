import { APP_ROUTES } from '@app/AppRoutes.enum';
import { useNavigate, Outlet } from '@solidjs/router';
import { Component, createSignal, createEffect } from 'solid-js';

const LoggedUser: Component = () => {
  const [isLogged] = createSignal(true);
  const navigate = useNavigate();

  createEffect(() => {
    if (!isLogged()) {
      navigate(APP_ROUTES.LOGIN);
    }
  });

  return <Outlet />;
};

export default LoggedUser;
