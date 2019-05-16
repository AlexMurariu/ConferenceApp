import React from 'react';

import {NavLink} from 'react-router-dom'
import {routing} from '../routes/routes'
import Navbar from '../components/navbar/navbar'

function App() {
  return (
     <div>

        <div>
          {routing}
        <Navbar>

        </Navbar>
        </div>
     </div>
  );
}

export default App;