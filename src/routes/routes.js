import { Switch, Route} from 'react-router-dom'
import Home from '../pages/home/home'
import Register from '../pages/register/register'
import React from "react";

export const routing = (
  <Switch>
    <Route path="/home" component={Home} />
    <Route exact path="/" component={Register} />
  </Switch>
);
