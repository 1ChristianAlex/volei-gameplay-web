import PageTitle from '@components/titles/PageTitle';
import { Grid } from '@suid/material';
import { Component } from 'solid-js';
import { PageTitleContainer } from '../styled';

const GamesList: Component = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <PageTitleContainer>
          <PageTitle>Confirmar Presença</PageTitle>
        </PageTitleContainer>
      </Grid>
    </Grid>
  );
};

export default GamesList;
