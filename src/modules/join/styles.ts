import { styledApp } from '@theme/theme';

const LetPlayText = styledApp('h1')((stl) => ({
  textAlign: 'center',
  fontWeight: '600',
  color: stl.theme.palette.primary.main,
  fontSize: '44px',
}));

const ButtonImage = styledApp('img')({ width: '35px', paddingLeft: '8px' });

const JoinPageContentWidth = styledApp('div')({
  display: 'flex',
  width: 'fit-content',
  justifyContent: 'center',
  margin: '0 auto',
  height: '100vh',
  alignItems: 'center',
});

export { LetPlayText, ButtonImage, JoinPageContentWidth };
