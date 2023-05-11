import { styledApp } from '@theme/theme';

const HeaderContainer = styledApp('header')({
  padding: '36px 24px',
  background: '#395597',
  height: 'calc(17.06vh - (36px * 2))',
  display: 'flex',
});

const LoggedContainer = styledApp('div')({
  height: 'calc(100vh - (17.06vh - (36px * 2)))',
});

const MainContainer = styledApp('main')({
  padding: '0 24px',
});

const UserNameLabel = styledApp('span')((stl) => ({
  fontWeight: '400',
  fontSize: '18px',
  color: stl.theme.palette.primary.contrastText,
}));

export { HeaderContainer, LoggedContainer, UserNameLabel, MainContainer };
