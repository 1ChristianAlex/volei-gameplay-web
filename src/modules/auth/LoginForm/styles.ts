import { A } from '@solidjs/router';
import { styledApp } from '@theme/theme';

const FormLogo = styledApp('img')({
  width: '100%',
  height: '100%',
  maxWidth: '154px',
  margin: '0 auto',
  display: 'flex',
});

const LoginFormContainer = styledApp('div')({ paddingTop: '40px' });

const DontHaveAccountText = styledApp('span')({
  color: '#7A7A7A',
  fontWeight: '400',
  fontSize: '14px',
});

const LinkRegister = styledApp(A)({
  textDecoration: 'none',
  fontWeight: '400',
  fontSize: '14px',
  textAlign: 'right',
  display: 'block',
});

const BoxSpacing = styledApp('div')({ marginTop: '8px' });

export { FormLogo, LoginFormContainer, DontHaveAccountText, LinkRegister, BoxSpacing };
