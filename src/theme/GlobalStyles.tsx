import styled from '@suid/system/styled';

const MyThemeComponent = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minWidth: '100vw',
  minHeight: '100vh',
}));

export { MyThemeComponent };
