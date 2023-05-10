import { styledApp } from '@theme/theme';

const LogoImage = styledApp('img')({
  width: '100%',
  height: '100%',
  maxWidth: '154px',
  margin: '0 auto',
  display: 'flex',
});

const LogoText = styledApp('h1')({
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '40px',
  textAlign: 'center',
  fontFamily: 'Bebas Neue, cursive',
});

export { LogoImage, LogoText };
