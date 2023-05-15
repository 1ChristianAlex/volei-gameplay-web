import { Component, Match, Switch } from 'solid-js';
import { CardContainer, CardCountLabel, CardTitleLabel, WhiteButton } from './styled';
import { Grid, useTheme } from '@suid/material';
import { GAME_CARD_ENUM } from './GameCard.enum';
import RoudedButton from '@components/inputs/RoudedButton';
import GroupsIcon from '@suid/icons-material/Groups';
interface GameCardContainerProps {
  dateText: string;
  playersCount: number;
  status: GAME_CARD_ENUM;
}

const GameCardContainer: Component<GameCardContainerProps> = (props) => {
  const theme = useTheme();

  return (
    <CardContainer ownerState={props}>
      <Grid container direction="column" justifyItems="center" spacing={2}>
        <Grid item>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <CardTitleLabel>{props.dateText}</CardTitleLabel>
            </Grid>
            <Grid item>
              <Grid container spacing={1} alignContent="center" alignItems="center">
                <Grid item>
                  <CardCountLabel>{props.playersCount}</CardCountLabel>
                </Grid>
                <Grid item>
                  <GroupsIcon htmlColor={theme.palette.primary.contrastText} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Switch>
            <Match when={props.status === GAME_CARD_ENUM.CAN_JOIN}>
              <WhiteButton variant="contained" fullWidth>
                Confirmar Presença
              </WhiteButton>
            </Match>
            <Match when={props.status === GAME_CARD_ENUM.CHECKED}>
              <RoudedButton color="error" variant="contained" fullWidth>
                Cancelar
              </RoudedButton>
            </Match>
          </Switch>
        </Grid>
      </Grid>
    </CardContainer>
  );
};

export default GameCardContainer;
