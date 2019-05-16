import { Switch, Route} from 'react-router-dom'
import Home from '../pages/home/Home.js'
import Register from '../pages/register/register'
import LogInForm from '../pages/login/login'
import React from "react";

export const routing = (
  <Switch>
    <Route path="/home" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={LogInForm} />
  </Switch>
);
