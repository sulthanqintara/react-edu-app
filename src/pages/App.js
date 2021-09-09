import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import ForgetPassword from "./forgetPassword/ForgetPassword";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forget-password" component={ForgetPassword} />
    </Router>
  );
}

export default App;
