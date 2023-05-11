import { Grid } from '@suid/material';
import { Accessor, Component, For, createEffect, createSignal, on } from 'solid-js';
import { daysOfWeek } from './calendar.constants';
import {
  CalendarContent,
  DaysOfYearCircle,
  DaysOfMonthGrid,
  DaysOfMonth,
} from './styled';
import { CalendarItem } from './model/CalendarItem';

interface CalendarDaysContentProps {
  calendarDate: Accessor<Date>;
}

const CalendarDaysContent: Component<CalendarDaysContentProps> = (props) => {
  const [calendarDays, setCalendarDays] = createSignal<CalendarItem[]>([]);

  const getDays = async () => {
    const calDate = props.calendarDate();
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
    on([props.calendarDate], () => {
      getDays();
    })
  );

  return (
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
  );
};

export default CalendarDaysContent;
