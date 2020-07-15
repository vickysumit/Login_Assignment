import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route  exact path="/" component={Login} />
      <Route  path="/admin" component={Admin} />
      <Route  path="/logout" component={Logout} />
    
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
