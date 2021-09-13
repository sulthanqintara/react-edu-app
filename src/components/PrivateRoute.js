import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export function PrivateRoute({ children, ...rest }) {
  const authState = useSelector((reduxState) => reduxState.auth);
  return (
    <Route
      {...rest}
      render={() => (authState.isLogin ? children : <Redirect to="/login" />)}
    />
  );
}

export function AuthRoute({ children, ...rest }) {
  const authState = useSelector((reduxState) => reduxState.auth);
  return (
    <Route
      {...rest}
      render={() => {
        return authState.isLogin ? <Redirect to="/" /> : children;
      }}
    />
  );
}

export function StudentRoute({ children, ...rest }) {
  const authState = useSelector((reduxState) => reduxState.auth);
  return (
    <Route
      {...rest}
      render={() => {
        return authState.authInfo.role_id === 2 ? (
          children
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
}

export function FacilitatorRoute({ children, ...rest }) {
  const authState = useSelector((reduxState) => reduxState.auth);
  return (
    <Route
      {...rest}
      render={() => {
        return authState.authInfo.role_id === 1 ? (
          children
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
}
