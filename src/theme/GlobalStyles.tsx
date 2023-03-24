import { styledApp } from './theme';

const MyThemeComponent = styledApp('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minWidth: '100vw',
  minHeight: '100vh',
}));

export { MyThemeComponent };
