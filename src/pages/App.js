import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  PrivateRoute,
  AuthRoute,
  StudentRoute,
  FacilitatorRoute,
} from "../components/PrivateRoute";
import reduxStore from "../redux/store";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import ForgetPassword from "./forgetPassword/ForgetPassword";
import Profile from "./profile/Profile";
import Activity from "./activity/Activity";
import MyClass from "./myclass/MyClass";
import ClassDetail from "./classDetail/ClassDetail";
import ClassProgress from "./classProgress/ClassProgress";

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
          <PrivateRoute path="/" exact>
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/myclass">
            <MyClass />
          </Route>
          <Route path="/class-detail">
            <ClassDetail />
          </Route>
          <Route path="/class-progress">
            <StudentRoute>
              <ClassProgress />
            </StudentRoute>
          </Route>
        </Router>
      </Provider>
    );
  }
}
export default App;
