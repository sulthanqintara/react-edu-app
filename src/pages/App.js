import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import ForgetPassword from "./forgetPassword/ForgetPassword";
import Profile from "./profile/Profile";
import Activity from "./activity/Activity";

function App() {
  return (
    <Router>
<<<<<<< HEAD
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forget-password" component={ForgetPassword} />
=======
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forget-password" component={ForgetPassword} />
      <Route path="/profile" component={Profile} />
      <Route path="/activity" component={Activity} />
>>>>>>> bcc8cd349e0f955fe5905b2eb4c218ef82ba3553
    </Router>
  );
}

export default App;
