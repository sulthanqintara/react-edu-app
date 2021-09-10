import { SIGNED_IN, SIGN_IN, SIGN_OUT } from "./actionString";
import { deleteLogout, postLogin } from "../../utils/https/Auth";

export const loginAction = (body) => {
  return {
    type: SIGN_IN,
    payload: postLogin(body),
  };
};

export const loggedInAction = () => {
  return {
    type: SIGN_OUT,
  };
};

export const registerAction = () => {
  return {};
};

export const logoutAction = () => {
  return {
    type: SIGNED_IN,
    payload: deleteLogout(),
  };
};