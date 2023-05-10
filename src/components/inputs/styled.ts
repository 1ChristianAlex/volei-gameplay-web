import { Button, TextField } from '@suid/material';
import { styledApp } from '@theme/theme';

const RoundedInputStyled = styledApp(TextField)({
  '& fieldset': {
    border: '1px solid #7A7A7A',
    borderRadius: '28px',
  },
});

const RoundedButton = styledApp(Button)({
  borderRadius: '28px',
});

export { RoundedInputStyled, RoundedButton };
