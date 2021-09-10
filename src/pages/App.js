import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PrivateRoute, AuthRoute } from "../components/PrivateRoute";
import reduxStore from "../redux/store";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import ForgetPassword from "./forgetPassword/ForgetPassword";
import Profile from "./profile/Profile";
import Activity from "./activity/Activity";

class App extends Component {
  state = {
    isLogin: false,
  };
  render() {
    return (
      <Provider store={reduxStore}>
        <Router>
          <AuthRoute path="/login">
            <Login />
          </AuthRoute>
          <AuthRoute path="/register">
            <Register />
          </AuthRoute>
          <AuthRoute path="/forget-password">
            <ForgetPassword />
          </AuthRoute>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/profile" >
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/activity" >
            <Activity />
          </PrivateRoute>
        </Router>
      </Provider>
    );
  }
}
export default App;
