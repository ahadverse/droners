import { AppBar, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const logo = 'https://i.ibb.co/ZVcgyGH/Pngtree-remote-control-drone-illustration-4747333-1.png';
const Header = () => {
  const {user, logOut} = useAuth()


  const theme = useTheme()

  const useStyle = makeStyles({
    
    navIcon:{
      [theme.breakpoints.up('sm')]: {
       display:'none !important'
      },
    },
    navItems:{
      [theme.breakpoints.down('sm')]: {
        display:'none !important'
       },
    },
    title:{
      [theme.breakpoints.down('sm')]: {
        textAlign:'right !important'
       },
    }
})
const { navIcon , navItems ,title }= useStyle()
  const [state, setState] = React.useState(false);

  const list = (
    <Box
      sx={{ width:  250 }}
      role="presentation"
     
    >
      <List>
       
          <ListItem button sx={{display:'flex' , flexDirection:'column'}}>
            <ListItemText>
            <Link style={{ textDecoration: 'none', color: 'black' }}  to="/"><Button color="inherit"> Home </Button></Link> 
                      
            </ListItemText>
            <br />
            <ListItemText>
            <Link  style={{ textDecoration: 'none', color: 'black' }} to="/products"><Button color="inherit"> Explore</Button></Link> 
                      
            </ListItemText>
            
            <ListItemText>
             
                    
              {
              user?.email ? 
                      <div>
                        <Link style={{ textDecoration: 'none', color: 'black' }}  to="/dashboard"><Button color="inherit"> Dashboard </Button></Link> 
                        <br />
                        
                      <Button style={{ color: 'black' }} onClick={logOut}> Log Out</Button>  
                      </div>
                        
          
            :
                        
            <div>
            <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}> <Button   color="inherit">Login </Button></Link>
            <br />
            <Link to="/register" style={{ textDecoration: 'none', color: 'black' }} > <Button  color="inherit">Sign Up</Button> </Link>
            </div>
        }
        
            </ListItemText>
          </ListItem>
        
      </List>
      <Divider />
      
    </Box>
  );

  
    return (
     <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" fixed sx={{ bgcolor: '  #0e1f3a  ' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
            onClick={()=>setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography  className={title} variant="h4" component="div" sx={{ flexGrow: 1 , mr:'550px'}}>
          Droners
          </Typography>
          <Box sx={{display:'flex'}} className={navItems}>
              <Link style={{ textDecoration: 'none', color: 'white' }}  to="/"><Button color="inherit"> Home </Button></Link> 
                      <Link  style={{ textDecoration: 'none', color: 'white' }} to="/products"><Button color="inherit"> Explore</Button></Link> 
              {
              user?.email ? <div>
                      <Link style={{ textDecoration: 'none', color: 'white' }}  to="/dashboard"><Button color="inherit"> Dashboard </Button></Link> 
              <Button onClick={logOut}  color="inherit">Log Out</Button>
                        
          </div>
            :
                        
            <div>
            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}> <Button   color="inherit">Login </Button></Link>
            <Link to="/register" style={{ textDecoration: 'none', color: 'white' }} > <Button  color="inherit">Sign Up</Button> </Link>
            </div>
        }
        </Box>
        </Toolbar>
      </AppBar>
    </Box>
     <div>
    
       <React.Fragment>
         
         <Drawer
           
           open={state}
           onClose={()=>setState(false)}
         >
           {list}
         </Drawer>
       </React.Fragment>
     
   </div>
     </>
    );
};

export default Header;