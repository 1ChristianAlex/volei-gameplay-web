import { Button } from '@suid/material';
import { Grid } from '@suid/material';
import { Component } from 'solid-js';
import volei from '../../assets/logo.png';
import { JoinPageContentWidth, LetPlayText, ButtonImage } from './styles';

const JoinGamePage: Component = () => (
  <JoinPageContentWidth>
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <LetPlayText>Bora jogar volei?</LetPlayText>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button color="primary" variant="contained">
              Vamos jogar <ButtonImage src={volei} />
            </Button>
          </Grid>

          <Grid item>
            <Button color="secondary" variant="contained">
              Deixa para a proxima...
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </JoinPageContentWidth>
);

export default JoinGamePage;
