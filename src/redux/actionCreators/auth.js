import { SIGN_IN, SIGN_OUT, REGISTER } from "./actionString";
import { deleteLogout, postLogin, postRegister } from "../../utils/https/Auth";

export const loginAction = (body) => {
  return {
    type: SIGN_IN,
    payload: postLogin(body),
  };
};

export const registerAction = (body) => {
  return {
    type: REGISTER,
    payload: postRegister(body),
  };
};

export const logoutAction = () => {
  return {
    type: SIGN_OUT,
    payload: deleteLogout(),
  };
};
