import { Component, createSignal } from 'solid-js';
import { Grid, IconButton } from '@suid/material';
import ArrowBackIosNewOutlinedIcon from '@suid/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@suid/icons-material/ArrowForwardIosOutlined';
import { months } from './calendar.constants';
import { MonthLabel, YearLabel } from './styled';
import CalendarDaysContent from './CalendarDaysContent';
import CalendarHintContainer from './CalendarHintContainer';

const Calendar: Component = () => {
  const [calendarDate, setCalendarDate] = createSignal(new Date());

  const changeMonth = (increase: boolean) => {
    setCalendarDate((current) => {
      const monthIndex = increase ? current.getMonth() + 1 : current.getMonth() - 1;
      return new Date(new Date(current).setMonth(monthIndex));
    });
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <Grid item xs>
            <YearLabel>{calendarDate().getFullYear()}</YearLabel>
          </Grid>

          <Grid item>
            <MonthLabel>{months.at(calendarDate().getMonth())}</MonthLabel>
          </Grid>

          <Grid item>
            <Grid container>
              <Grid item>
                <IconButton
                  color="primary"
                  size="small"
                  onClick={() => changeMonth(false)}
                >
                  <ArrowBackIosNewOutlinedIcon fontSize="small" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  color="primary"
                  size="small"
                  onClick={() => changeMonth(true)}
                >
                  <ArrowForwardIosOutlinedIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CalendarDaysContent calendarDate={calendarDate} />
      </Grid>
      <Grid item>
        <CalendarHintContainer />
      </Grid>
    </Grid>
  );
};

export default Calendar;
