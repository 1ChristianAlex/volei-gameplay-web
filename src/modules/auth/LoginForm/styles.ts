import { Paper } from '@suid/material';
import { styledApp } from '@theme/theme';

const PaperForm = styledApp(Paper)(() => ({
  padding: 16,
}));

const FormLogo = styledApp('img')({
  width: '100%',
  height: 'auto',
  maxWidth: '100px',
  margin: '0 auto',
  display: 'flex',
  padding: '16px 0',
});

export { PaperForm, FormLogo };
