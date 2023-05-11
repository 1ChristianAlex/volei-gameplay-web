import { Grid } from '@suid/material';
import { Component } from 'solid-js';
import { CalendarHint, CalendarHintCircle } from './styled';

const CalendarHintContainer: Component = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <CalendarHint>
          <CalendarHintCircle ownerState={{ isToday: true }} />
          Hoje
        </CalendarHint>
      </Grid>
      <Grid item>
        <CalendarHint>
          <CalendarHintCircle ownerState={{ isScheduled: true }} />
          Agendado
        </CalendarHint>
      </Grid>
      <Grid item>
        <CalendarHint>
          <CalendarHintCircle ownerState={{ isCanceled: true }} />
          Cancelado
        </CalendarHint>
      </Grid>
    </Grid>
  );
};

export default CalendarHintContainer;
