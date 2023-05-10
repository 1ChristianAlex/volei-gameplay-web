import { Grid } from '@suid/material';
import { Component } from 'solid-js';
import volei from '../../../assets/logo.png';
import { LogoImage, LogoText } from './styled';

const VerticalLogo: Component = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <LogoImage src={volei} />
      </Grid>
      <Grid item>
        <LogoText>VOLEIZIN</LogoText>
      </Grid>
    </Grid>
  );
};

export default VerticalLogo;
