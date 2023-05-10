import { Grid } from '@suid/material';
import { Component } from 'solid-js';
import LoginContainer from './LoginForm/LoginContainer';
import { PageCenterContainer } from './styles';

const LoginPage: Component = () => (
  <PageCenterContainer>
    <Grid container direction={'column'} justifyContent="center">
      <Grid item>
        <LoginContainer />
      </Grid>
    </Grid>
  </PageCenterContainer>
);

export default LoginPage;
