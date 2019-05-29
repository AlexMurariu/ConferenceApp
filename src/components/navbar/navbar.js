import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light stick">
        <NavLink className="navbar-brand" exact to="/">
          ConfyGo
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/home"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            {!this.props.status ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/register"
                  activeClassName="active"
                >
                  Register
                </NavLink>
              </li>
            ) : null}
            {!this.props.status ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  activeClassName="active"
                >
                  Log In
                </NavLink>
              </li>
            ) : null}
            {this.props.status ? <li className="nav-item user-box">
              <div className="nav-link" onClick={() => this.props.logout("", "", "", "")}>
                Log Out
              </div>
            </li> : null}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
