import PageTitle from '@components/titles/PageTitle';
import { Grid } from '@suid/material';
import { Component } from 'solid-js';
import { GameListContainer, NextGamesLabel, PageTitleContainer } from './styled';
import GameCardContainer from '@components/game-card/GameCardContainer';
import { GAME_CARD_ENUM } from '@components/game-card/GameCard.enum';

const GamesList: Component = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <PageTitleContainer>
          <PageTitle>Confirmar Presença</PageTitle>
        </PageTitleContainer>
      </Grid>
      <Grid item>
        <NextGamesLabel>Próximos Jogos</NextGamesLabel>
      </Grid>

      <Grid item>
        <GameListContainer>
          <Grid
            container
            direction="column"
            spacing={1}
            justifyContent="center"
            justifyItems="center"
          >
            <Grid item>
              <GameCardContainer
                dateText="28 de Abril, Sexta-Feira"
                playersCount={24}
                status={GAME_CARD_ENUM.CHECKED}
              />
            </Grid>
            <Grid item>
              <GameCardContainer
                dateText="05 de Maio, Sexta-Feira"
                playersCount={8}
                status={GAME_CARD_ENUM.CAN_JOIN}
              />
            </Grid>
          </Grid>
        </GameListContainer>
      </Grid>
    </Grid>
  );
};

export default GamesList;
