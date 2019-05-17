import React from "react";
import { routing } from "../routes/routes";
import Navbar from "../components/navbar/navbar";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userLoggedIn: false
    }
  }
  render() {
    return (
      <div>
        <div>
          {routing}
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;
