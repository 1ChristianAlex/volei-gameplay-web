import { Component, createSignal, createEffect, on } from 'solid-js';
import { Grid } from '@suid/material';
import { BoxSpacing, DontHaveAccountText, LoginFormContainer } from './styles';
import { IconButton } from '@suid/material';
import LoginFormModel from './model/login-form-model';
import { validateOrReject, ValidationError } from 'class-validator';
import Visibility from '@suid/icons-material/Visibility';
import VisibilityOff from '@suid/icons-material/VisibilityOff';
import RoundedInput from '@components/inputs/RoundedInput';
import RoudedButton from '@components/inputs/RoudedButton';
import { LinkRegister } from './styles';

const LoginFormAction: Component = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [showPassword, setShowPassword] = createSignal(false);

  const [formErros, setFormErros] = createSignal<ValidationError[]>([]);

  const validateForm = async () => {
    try {
      const form = new LoginFormModel({
        email: email(),
        password: password(),
      });
      await validateOrReject(form);
    } catch (errors) {
      if (Array.isArray(errors)) {
        const validationErros = errors.filter((err) => err instanceof ValidationError);

        setFormErros(validationErros);
      }
    }
  };

  const getErrorByProperty = (propertyName: string) => {
    if (!!formErros().length) {
      const errorItem = formErros().find((err) => err.property === propertyName);

      if (errorItem?.constraints) {
        const [message] = Object.values(errorItem.constraints);
        const [first, ...rest] = Array.from(message);
        return [first.toUpperCase(), ...rest].join('');
      }
    }

    return '';
  };

  createEffect(
    on([email, password], () => {
      setFormErros([]);
    })
  );

  return (
    <LoginFormContainer>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <RoundedInput
            fullWidth
            value={email()}
            onChange={(_, value: string) => {
              setEmail(value);
            }}
            label="Email ou telefone"
            error={!!getErrorByProperty('email')}
            helperText={getErrorByProperty('email')}
          />
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <RoundedInput
                fullWidth
                value={password()}
                onChange={(_, value: string) => {
                  setPassword(value);
                }}
                type={showPassword() ? 'text' : 'password'}
                label="Senha"
                error={!!getErrorByProperty('password')}
                helperText={getErrorByProperty('password')}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      edge="start"
                      onClick={() => setShowPassword((current) => !current)}
                    >
                      {showPassword() ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <LinkRegister href="/register">Esqueci minha senha</LinkRegister>
            </Grid>
          </Grid>
        </Grid>
        <BoxSpacing />
        <Grid item>
          <RoudedButton
            color="primary"
            fullWidth
            variant="contained"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();

              validateForm();
            }}
            disabled={!!formErros().length}
          >
            Entrar
          </RoudedButton>
        </Grid>
        <Grid item>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <DontHaveAccountText>Ainda não possui uma conta?</DontHaveAccountText>
            </Grid>
            <Grid item>
              <RoudedButton color="primary" fullWidth variant="outlined">
                Cadastrar
              </RoudedButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LoginFormContainer>
  );
};

export default LoginFormAction;
