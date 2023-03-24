import { Component, createSignal } from 'solid-js';
import { Button, Grid } from '@suid/material';
import { PaperContainer, PaperForm } from './styles';
import { TextField } from '@suid/material';

const AuthContainer: Component = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');

  return (
    <PaperContainer>
      <PaperForm elevation={2}>
        <Grid container direction="column" spacing={2}>
          {email()}
          {password()}
          <Grid item>
            <TextField
              fullWidth
              value={email()}
              onChange={(_, value: string) => {
                setEmail(value);
              }}
              label="Email"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              value={password()}
              onChange={(_, value: string) => {
                setPassword(value);
              }}
              type="password"
              label="Password"
            />
          </Grid>
          <Grid item>
            <Button fullWidth variant="outlined">
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button fullWidth variant="outlined">
              Forgot
            </Button>
          </Grid>
        </Grid>
      </PaperForm>
    </PaperContainer>
  );
};

export default AuthContainer;
