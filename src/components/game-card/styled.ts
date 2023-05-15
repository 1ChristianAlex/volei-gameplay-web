import { styledApp } from '@theme/theme';
import { GAME_CARD_ENUM } from './GameCard.enum';
import RoudedButton from '@components/inputs/RoudedButton';

interface CardContainerProps {
  status: GAME_CARD_ENUM;
}

const CardContainer = styledApp('div')<CardContainerProps>((stl) => ({
  backgroundColor:
    GAME_CARD_ENUM.CHECKED === stl.ownerState.status
      ? stl.theme.palette.primary.dark
      : stl.theme.palette.success.main,
  borderRadius: '8px',
  display: 'flex',
  padding: '12px',
}));

const CardTitleLabel = styledApp('span')((stl) => ({
  color: stl.theme.palette.primary.contrastText,
  fontWeight: '700',
  fontSize: '16px',
}));

const CardCountLabel = styledApp('span')((stl) => ({
  color: stl.theme.palette.primary.contrastText,
  fontWeight: '700',
  fontSize: '18px',
}));

const WhiteButton = styledApp(RoudedButton)((stl) => ({
  '&&': {
    backgroundColor: stl.theme.palette.common.white,
    color: stl.theme.palette.common.black,
  },
}));

export { CardContainer, CardTitleLabel, CardCountLabel, WhiteButton };
