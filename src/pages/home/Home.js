import React from "react";
import Conference from "../../components/conference/conference";

class Home extends React.Component {
  render() {
    return (
        <div>
          <Conference/>
          <Conference/>
          <Conference/>
        </div>
    );
  }
}

export default Home;
