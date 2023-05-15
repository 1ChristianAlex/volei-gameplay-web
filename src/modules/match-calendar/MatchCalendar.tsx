import PageTitle from '@components/titles/PageTitle';
import { Grid } from '@suid/material';
import { Component } from 'solid-js';
import { PageTitleContainer } from './styled';
import Calendar from '@components/calendar/Calendar';
import SwitchButton from '@components/inputs/SwitchButton';

const MatchCalendar: Component = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <PageTitleContainer>
          <PageTitle>Calendário de Partidas</PageTitle>
        </PageTitleContainer>
      </Grid>
      <Grid item>
        <Calendar />
      </Grid>
      <SwitchButton />
    </Grid>
  );
};

export default MatchCalendar;
