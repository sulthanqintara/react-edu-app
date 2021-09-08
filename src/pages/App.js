import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";

function App() {
  return (
    <Router>
      <Route path="/" exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default App;
