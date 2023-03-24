import { Button } from '@suid/material';
import { Grid } from '@suid/material';
import { Component } from 'solid-js';
import LoginContainer from './LoginForm/LoginContainer';
import { LinkRegister, PageCenterContainer } from './styles';

const LoginPage: Component = () => (
  <PageCenterContainer>
    <Grid container direction={'column'}>
      <Grid item>
        <LoginContainer />
      </Grid>
      <Grid item>
        <LinkRegister href="/register">
          <Button color="primary" fullWidth variant="text">
            Não tem conta?
          </Button>
        </LinkRegister>
      </Grid>
    </Grid>
  </PageCenterContainer>
);

export default LoginPage;
