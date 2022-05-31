import * as React from 'react';
import './Dashboard.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';

// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../Hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import AllPurchase from '../AllPurchase/AllPurchase';
import AdminRoute from '../../../Hooks/AdminRoute';
import { FaArrowRight } from 'react-icons/fa';
import AddReviews from '../AddReviews/AddReviews';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../AddProducts/AddProducts';
import DashHome from '../DashHome/DashHome';
import ManageProducts from '../ManageProducts/ManageProducts';


const drawerWidth = 240;

function DashBoard(props) {
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin, logOut} = useAuth()
  
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let { path, url } = useRouteMatch();

  const drawer = (
    <div>
      <Toolbar sx={{ bgcolor: '#231562' }}  />
     
      <List className="list">
    
     
      
      
  

      {
        admin ? <Box>
        <Link style={{ textDecoration: 'none', color: 'white' }} sx={{  textDecoraton : 'none' }}  to={`${url}/admin`}> <Button color="inherit"> Make Admin  </Button></Link>
        <br />
      <Link style={{ textDecoration: 'none', color: 'white' }} sx={{  textDecoraton : 'none' }}  to={`${url}/addproduct`}> <Button color="inherit"> Add a Product  </Button></Link> 
      <br />
      <Link style={{ textDecoration: 'none', color: 'white' }} sx={{  textDecoraton : 'none' }}  to={`${url}/allorders`}> <Button color="inherit"> Manage All Orders  </Button></Link> 
      <br />
      <Link style={{ textDecoration: 'none', color: 'white' }} sx={{  textDecoraton : 'none' }}  to={`${url}/manageproducts`}> <Button color="inherit"> Manage Products  </Button></Link> 
      </Box>
      :
      <Box>
      <Link style={{ textDecoration: 'none', color: 'white' }} sx={{ textDecoraton : 'none' }}  to={`${url}/payment`}> <Button color="inherit"> Pay </Button></Link>
      <br />
      <Link style={{ textDecoration: 'none', color: 'white' }} sx={{  textDecoraton : 'none' }}  to={`${url}/myorders`}> <Button color="inherit"> My Orders  </Button></Link>
      <br />
      <Link style={{ textDecoration: 'none', color: 'white' }} sx={{  textDecoraton : 'none' }}  to={`${url}/review`}> <Button color="inherit">Review  </Button></Link>
      <br />
    </Box>
    }
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <br />
      <Link style={{ textDecoration: 'none', color: 'white' }} sx={{  textDecoraton : 'none' }}  to="/"> <Button color="inherit"> Home  </Button></Link>
      <br />
      <Link style={{ textDecoration: 'none', color: 'white' }} sx={{  textDecoraton : 'none' }}  to="/products"> <Button color="inherit"> Explore  </Button></Link>
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <br />
      <br />
      <Link style={{ textDecoration: 'none', color: 'white' }} sx={{  textDecoraton : 'none'}}  to="/"> <Button onClick={logOut} color="inherit"> Log out  </Button> <FaArrowRight sx={{ pt: 5 }} /></Link>
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
  
    <Box sx={{ display: 'flex' }}>
        
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{color:'black', bgcolor: '#fff' , border:'0px'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ color: '#231562' , border: 0 , ml:10}}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none',color:'#15d2d2' , bgcolor:'#15d2d2' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' , color:'#15d2d2' , bgcolor:'#15d2d2'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
      className="dashboard"
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
      >
        <Toolbar />
        <Switch>
        
        <Route exact path={path}>
        <DashHome></DashHome>
        </Route>
        
        <AdminRoute path={`${path}/allorders`}>
          <AllPurchase></AllPurchase>
        </AdminRoute>
        <AdminRoute path={`${path}/addproduct`}>
          <AddProducts></AddProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/manageproducts`}>
          <ManageProducts></ManageProducts>
        </AdminRoute>
        <Route path={`${path}/myorders`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/payment`}>
          <Pay></Pay>
        </Route>
       
        <Route path={`${path}/review`}>
        <AddReviews></AddReviews>
        </Route>
        <AdminRoute path={`${path}/admin`}>
        <MakeAdmin></MakeAdmin>
        </AdminRoute>
      </Switch>
        
      </Box>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{color:'white',  bgcolor: '#231562' , border:'0px'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap component="div" sx={{ color: '#15d2d2' , mx:'auto' , border: 0 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
