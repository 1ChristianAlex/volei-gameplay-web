import { Component } from 'solid-js';
import { Outlet } from '@solidjs/router';
import { HeaderContainer, LoggedContainer, MainContainer, UserNameLabel } from './styled';
import { Grid, useTheme } from '@suid/material';
import PersonOutlineOutlinedIcon from '@suid/icons-material/PersonOutlineOutlined';

const UserHeader: Component = () => {
  const userName = 'Christian';
  const theme = useTheme();

  return (
    <LoggedContainer>
      <Grid container direction="column" wrap="nowrap">
        <Grid item>
          <HeaderContainer>
            <Grid container justifyContent="space-between" alignContent="flex-end">
              <Grid item>
                <UserNameLabel>Olá {userName}</UserNameLabel>
              </Grid>
              <Grid item>
                <PersonOutlineOutlinedIcon
                  htmlColor={theme.palette.primary.contrastText}
                />
              </Grid>
            </Grid>
          </HeaderContainer>
        </Grid>
        <Grid item>
          <MainContainer>
            <Outlet />
          </MainContainer>
        </Grid>
      </Grid>
    </LoggedContainer>
  );
};

export default UserHeader;
