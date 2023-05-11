import { APP_ROUTES } from '@app/AppRoutes.enum';
import { useNavigate } from '@solidjs/router';
import { Component, createEffect } from 'solid-js';

const Dashboard: Component = () => {
  const navigate = useNavigate();

  createEffect(() => {
    navigate(APP_ROUTES.LOGIN);
  });

  return <div></div>;
};

export default Dashboard;
