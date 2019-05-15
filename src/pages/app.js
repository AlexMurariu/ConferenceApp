import React from 'react';
import {NavLink} from 'react-router-dom'
import {routing} from '../routes/routes'
function App() {
  return (
    <div>
      {routing}
    <div>
      <NavLink exact to="/home" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/" activeClassName="active">
        Register
      </NavLink>
    </div>
  </div>
  );
}

export default App;