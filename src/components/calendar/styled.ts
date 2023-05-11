import { styledApp } from '@theme/theme';

const YearLabel = styledApp('span')((stl) => ({
  fontWeight: '700',
  fontSize: '24px',
  color: stl.theme.palette.primary.dark,
}));

const MonthLabel = styledApp('span')((stl) => ({
  fontWeight: '700',
  fontSize: '18px',
  color: stl.theme.palette.primary.dark,
}));

const CalendarContent = styledApp('section')({
  margin: '24px 0',
});

const DaysOfYearCircle = styledApp('span')((stl) => ({
  border: `1px solid ${stl.theme.palette.primary.dark}`,
  boxSizing: 'border-box',
  borderRadius: '50%',
  fontWeight: '700',
  fontSize: '24px',
  height: '40px',
  display: 'flex',
  width: '40px',
  justifyContent: 'center',
  alignItems: 'center',
}));

interface DaysOfMonthProps {
  isLastMonth: boolean;
  isToday: boolean;
  isCanceled: boolean;
  isScheduled: boolean;
}

const DaysOfMonth = styledApp('span')<DaysOfMonthProps>((stl) => {
  return {
    color: stl.theme.palette.primary.dark,
    fontWeight: '700',
    fontSize: '24px',
    height: '40px',
    display: 'flex',
    width: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    gridRowGap: '4px',
    ...(stl.ownerState?.isLastMonth && {
      background: '#BFBFBF',
      color: '#8B8B8B',
    }),
    ...(stl.ownerState?.isToday && {
      background: '#395597',
      color: stl.theme.palette.primary.contrastText,
    }),
    ...(stl.ownerState?.isCanceled && {
      background: 'rgba(228, 72, 72, 0.4)',
      border: '1px solid #E44848',
      color: stl.theme.palette.primary.contrastText,
    }),
    ...(stl.ownerState?.isScheduled && {
      background: 'rgba(57, 151, 83, 0.6)',
      border: '1px solid #399753',
      color: stl.theme.palette.primary.contrastText,
    }),
  };
});

const DaysOfMonthGrid = styledApp('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  rowGap: '8px',
});

const CalendarHint = styledApp('span')({
  fontWeight: '400',
  fontSize: '16px',
  display: 'flex',
});

interface CalendarHintCircleProps {
  isToday?: boolean;
  isCanceled?: boolean;
  isScheduled?: boolean;
}

const CalendarHintCircle = styledApp('div')<CalendarHintCircleProps>((stl) => ({
  ...(stl.ownerState?.isToday && {
    background: '#395597',
    color: stl.theme.palette.primary.contrastText,
    border: '1px solid #395597',
  }),
  ...(stl.ownerState?.isCanceled && {
    background: 'rgba(228, 72, 72, 0.4)',
    border: '1px solid #E44848',
    color: stl.theme.palette.primary.contrastText,
  }),
  ...(stl.ownerState?.isScheduled && {
    background: 'rgba(57, 151, 83, 0.6)',
    border: '1px solid #399753',
    color: stl.theme.palette.primary.contrastText,
  }),
  padding: '7px',
  borderRadius: '50%',
  marginRight: '8px',
}));

export {
  YearLabel,
  MonthLabel,
  CalendarContent,
  DaysOfYearCircle,
  DaysOfMonth,
  DaysOfMonthGrid,
  CalendarHint,
  CalendarHintCircle,
};
