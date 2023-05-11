import { styledApp } from '@theme/theme';

const TitleStyled = styledApp('h1')((stl) => ({
  fontWeight: '700',
  fontSize: '18px',
  color: stl.theme.palette.primary.dark,
}));

export { TitleStyled };
