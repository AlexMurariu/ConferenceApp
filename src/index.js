import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/app";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>,
  document.getElementById("root")
);
