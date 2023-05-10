import { Component } from 'solid-js';
import { Grid } from '@suid/material';
import VerticalLogo from '@modules/common/Logo/VerticalLogo';
import LoginFormAction from './LoginFormAction';

const LoginContainer: Component = () => (
  <Grid container direction="column" justifyContent="space-between">
    <Grid item>
      <VerticalLogo />
    </Grid>
    <Grid item>
      <LoginFormAction />
    </Grid>
  </Grid>
);

export default LoginContainer;
