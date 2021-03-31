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
        <Route path='/addbooks'>
          <AddProduct></AddProduct>
        </Route>
        <Route path='/managebooks'>
          <ManageBook></ManageBook>
        </Route>
        <Route path='/checkout/:id'>
          <Checkout></Checkout>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
