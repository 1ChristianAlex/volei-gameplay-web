import { styledApp } from '@theme/theme';

const NextGamesLabel = styledApp('span')((stl) => ({
  color: stl.theme.palette.primary.dark,
  fontWeight: 700,
  fontSize: '16px',
}));

const PageTitleContainer = styledApp('div')({ margin: '40px 0 24px 0' });
const GameListContainer = styledApp('div')({ margin: '16px 0' });

export { NextGamesLabel, PageTitleContainer, GameListContainer };
