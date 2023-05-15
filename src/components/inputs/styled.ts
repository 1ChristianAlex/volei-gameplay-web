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

const FixedButtonContainer = styledApp('div')((stl) => ({
  backgroundColor: stl.theme.palette.primary.dark,
  border: '1px solid #395597',
  borderRadius: '32px',
  position: 'fixed',
  bottom: '36px',
  width: '200px',
  left: '0',
  right: '0',
  margin: '0 auto',
  overflow: 'hidden',
}));

const AbsoluteTransitionButton = styledApp('div')((stl) => ({
  position: 'absolute',
  width: '50%',
  height: '100%',
  transition: 'all 0.1s linear',
  borderRadius: '30px',
  backgroundColor: stl.theme.palette.primary.main,
  '&& :hover': {
    backgroundColor: `${stl.theme.palette.primary.main}!important`,
  },
}));

const FixedButton = styledApp(Button)((stl) => ({
  borderRadius: '30px',
  backgroundColor: stl.theme.palette.primary.dark,
  width: '200px',
  height: '64px',
  position: 'relative',

  '.icon-high-index': {
    zIndex: '10',
    position: 'relative',
  },
}));

export {
  RoundedInputStyled,
  RoundedButton,
  FixedButtonContainer,
  FixedButton,
  AbsoluteTransitionButton,
};
