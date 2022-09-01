import { useState } from 'react';
import { Box, Button, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Menu = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({[anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 220 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['','Dashboard', 'Products', 'Settings'].map((text) => (

          <ListItem key={text} component={Link} to={`/${text.toLowerCase()}`} disablePadding>
            <ListItemButton>
              <ListItemText primary={text === '' ? 'View Website' : text} sx={{color: 'black'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='nav'>
      {
        ['left'].map((anchor) => (
          <div key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon sx={{ color: 'white' }}/>
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              { list(anchor) }
            </SwipeableDrawer>
          </div>
        ))
      }
      <h1 className='logo'>Ecom Dash</h1>
    </div>
  );
}

export default Menu;