
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products/Products';
import Confirm from './Pages/Confirm/Confirm';
import SignUp from './Pages/Sign/SignUp/SignUp';
import SignIn from './Pages/Sign/SignIn/SignIn';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Hooks/PrivateRoute';
import AllPurchase from './Pages/Dashboard/AllPurchase/AllPurchase';
import DashBoard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
     
       <Switch>
       <PrivateRoute path="/products/:id">
           <Confirm></Confirm>
           </PrivateRoute>
          <Route path="/products">
           <Products></Products>
          </Route>
          <Route exact path={["/","/home"]}>
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
          <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="/register">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <SignIn></SignIn>
          </Route>
        </Switch>
       </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
