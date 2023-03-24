import { A } from '@solidjs/router';
import { styledApp } from '@theme/theme';

const PageCenterContainer = styledApp('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '500px',
  margin: '0 auto',
});

const LinkRegister = styledApp(A)((stl) => ({
  margin: '16px auto',
  fontSize: 16,
  display: 'flex',
  width: 'fit-content',
  fontFamily: stl.theme.typography.fontFamily,
  textDecoration: 'none',
}));

export { PageCenterContainer, LinkRegister };
