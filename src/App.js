import logo from './logo.svg';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ManageBook from './Components/ManageBook/ManageBook';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PirvateRoute from './Components/PrivateRoute/PirvateRoute';
import Orders from './Components/Orders/Orders';

export const UserContext =  createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <PirvateRoute path='/addbooks'>
          <AddProduct></AddProduct>
        </PirvateRoute>
        <PirvateRoute path='/managebooks'>
          <ManageBook></ManageBook>
        </PirvateRoute>
        <PirvateRoute path='/checkout/:id'>
          <Checkout></Checkout>
        </PirvateRoute>
        <PirvateRoute path='/orders'>
          <Orders></Orders>
        </PirvateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
