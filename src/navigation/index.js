import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../components/Home';
import Login from '../components/Login';
import App from '../App'

function Navigation() {
  return (

    <BrowserRouter>
      <Switch>
      <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/signup" component={App} exact />
      </Switch>

    </BrowserRouter>
  )
}

export default Navigation
