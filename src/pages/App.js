import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import ForgetPassword from "./forgetPassword/ForgetPassword";
import Profile from "./profile/Profile";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forget-password" component={ForgetPassword} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
