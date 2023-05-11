import { Component, createSignal, For, createEffect, on } from 'solid-js';
import { Grid, IconButton } from '@suid/material';
import ArrowBackIosNewOutlinedIcon from '@suid/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@suid/icons-material/ArrowForwardIosOutlined';
import { daysOfWeek, months } from './calendar.constants';
import {
  CalendarContent,
  CalendarHint,
  CalendarHintCircle,
  DaysOfMonth,
  DaysOfMonthGrid,
  DaysOfYearCircle,
  MonthLabel,
  YearLabel,
} from './styled';
import { CalendarItem } from './model/CalendarItem';

const Calendar: Component = () => {
  const [calendarDate, setCalendarDate] = createSignal(new Date());
  const [calendarDays, setCalendarDays] = createSignal<CalendarItem[]>([]);

  const changeMonth = (increase: boolean) => {
    setCalendarDate((current) => {
      const monthIndex = increase ? current.getMonth() + 1 : current.getMonth() - 1;
      return new Date(new Date(current).setMonth(monthIndex));
    });
  };

  const getDays = async () => {
    const calDate = calendarDate();
    const dayOneMonth = new Date(calDate);

    dayOneMonth.setDate(1);

    const days: CalendarItem[] = [];

    if (dayOneMonth.getDay() !== 0) {
      const dayRegress = dayOneMonth.getDay();

      dayOneMonth.setDate(dayOneMonth.getDate() - dayRegress);
    }

    const today = new Date();

    while (
      dayOneMonth.getMonth() <= calDate.getMonth() &&
      calDate.getFullYear() === dayOneMonth.getFullYear()
    ) {
      const dateIncrease = dayOneMonth.getDate();

      const isFriday = dayOneMonth.getDay() === 5;

      const randomMock = !!(Math.floor(Math.random() * 10) % 2);

      days.push(
        new CalendarItem({
          isCanceled: isFriday && randomMock,
          isScheduled: isFriday && !randomMock,
          isToday: today.toLocaleDateString() === dayOneMonth.toLocaleDateString(),
          isLastMonth: dayOneMonth.getMonth() < calDate.getMonth(),
          day: dateIncrease,
        })
      );

      dayOneMonth.setDate(dateIncrease + 1);
    }
    setCalendarDays(days);
  };

  createEffect(
    on([calendarDate], () => {
      getDays();
    })
  );

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
        <CalendarContent>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Grid container textAlign="center">
                <For each={daysOfWeek}>
                  {(item) => (
                    <Grid item xs>
                      <DaysOfYearCircle>{item.charAt(0).toUpperCase()}</DaysOfYearCircle>
                    </Grid>
                  )}
                </For>
              </Grid>
            </Grid>
            <Grid item>
              <DaysOfMonthGrid>
                <For each={calendarDays()}>
                  {(item) => (
                    <DaysOfMonth
                      ownerState={{
                        isLastMonth: item.isLastMonth,
                        isToday: item.isToday,
                        isCanceled: item.isCanceled,
                        isScheduled: item.isScheduled,
                      }}
                    >
                      {item.day}
                    </DaysOfMonth>
                  )}
                </For>
              </DaysOfMonthGrid>
            </Grid>
          </Grid>
        </CalendarContent>
      </Grid>
      <Grid item>
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
      </Grid>
    </Grid>
  );
};

export default Calendar;
