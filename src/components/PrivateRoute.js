import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export function PrivateRoute({ children, ...rest }) {
  const authState = useSelector((reduxState) => reduxState.auth);
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    setAllowed(true);
  }, [authState.isLogin]);
  return (
    <Route
      {...rest}
      render={() => (allowed ? <Redirect to="/login" />: children )}
    />
  );
}

export function AuthRoute({ children, ...rest }) {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  return (
    <Route {...rest} render={() => (token ? children : <Redirect to="/" />)} />
  );
}