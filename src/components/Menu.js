import { useEffect, useState } from 'react';
import { logout } from "../firebase";
import { Box, Button, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer, Divider} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Menu = ({user, profiles, getProfiles}) => {
  const [state, setState] = useState({
    left: false,
  });

  const loading = () => {
    return <h1>Loading...</h1>
  }

  const userProfile = profiles.find((el) => {
        return el.uid === user.uid
  }) 

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
        <Link to='/'>
          <ListItemButton>
                <ListItemText primary='View Website' sx={{color: 'black'}}/>
          </ListItemButton>
        </Link>
        <Divider />
        {
          ['Dashboard', 'Products', 'Settings'].map((text, index) => (
            <ListItem key={index} component={Link} to={`/admin/${text.toLowerCase()}`} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} sx={{color: 'black'}}/>
              </ListItemButton>
            </ListItem>
          ))
        }
        <Divider/>
        {
          user ? 
          <>
            <ListItemButton onClick={logout}>
              <ListItemText primary='Logout' sx={{color: 'black'}}/>
            </ListItemButton>
          </>
          : null
        }
      </List>
    </Box>
  );

  const loaded = () => {

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
        <Link className='logo' to='/'>
          { 
            userProfile ? userProfile.storeTitle : user.displayName + "'s Store"
          }
        </Link>
      </div>
    )
  }

  useEffect(() => {
      getProfiles();
      // eslint-disable-next-line
  },[])

  return (
      user ? loaded() : loading()
  );
}

export default Menu;