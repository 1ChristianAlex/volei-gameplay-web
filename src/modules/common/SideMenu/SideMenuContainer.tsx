import { AppBar, Drawer, IconButton, Toolbar, Typography } from '@suid/material';
import { createSignal } from 'solid-js';
import { Component } from 'solid-js';
import MenuIcon from '@suid/icons-material/MenuOutlined';

const SideMenuContainer: Component = () => {
  const [isOpen, setisOpen] = createSignal(false);

  const toggleDrawer = (open: boolean) => (event: MouseEvent | KeyboardEvent) => {
    if (event.type === 'keydown') {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key === 'Tab' || keyboardEvent.key === 'Shift') return;
    }
    setisOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" open={isOpen()}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isOpen()}
        sx={{ zIndex: 9999 }}
        onClose={toggleDrawer(false)}
      ></Drawer>
    </>
  );
};

export default SideMenuContainer;
