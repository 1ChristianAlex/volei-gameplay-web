import { Component, createSignal, Show, For } from 'solid-js';
import { Alert, Button, Grid } from '@suid/material';
import { FormLogo, PaperForm } from './styles';
import { TextField } from '@suid/material';
import volei from '../../../assets/bola-de-voleibol-1.png';
import FormFieldData from '@lib/FormData';
import EmailValidation from '@lib/EmailValidation';

const LoginContainer: Component = () => {
  const [email, setEmail] = createSignal(
    new FormFieldData('', [
      (value) => {
        if (!EmailValidation.isValid(value)) {
          return 'Email is not valid.';
        }
      },
    ])
  );
  const [password, setPassword] = createSignal(
    new FormFieldData('', [
      (value) => {
        if (value.length <= 8) {
          return 'Password does not have min lenght';
        }
      },
    ])
  );

  const [hasError, setHasError] = createSignal(false);

  return (
    <PaperForm elevation={2}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <FormLogo src={volei} />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            value={email().value}
            onChange={(_, value: string) => {
              setEmail((current) => new FormFieldData(value, current.validations));
            }}
            label="Email ou telefone"
            error={hasError()}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            value={password().value}
            onChange={(_, value: string) => {
              setPassword((current) => new FormFieldData(value, current.validations));
            }}
            type="password"
            label="Senha"
            error={hasError()}
          />
        </Grid>

        <Show when={hasError()}>
          <For each={[...email().erros, ...password().erros]}>
            {(item) => (
              <Grid item>
                <Alert severity="error">{item}</Alert>
              </Grid>
            )}
          </For>
        </Show>

        <Grid item>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();

              const erros = [email, password].map((item) => {
                const field = item();
                field.validate();

                return field.isValid;
              });

              setHasError(erros.includes(false));
            }}
          >
            Entrar
          </Button>
        </Grid>
        <Grid item>
          <Button color="secondary" fullWidth variant="contained">
            Esqueci minha senha
          </Button>
        </Grid>
      </Grid>
    </PaperForm>
  );
};

export default LoginContainer;
