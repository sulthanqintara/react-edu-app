import { SIGN_IN, SIGN_OUT, REGISTER } from "./actionString";
import { deleteLogout, postLogin, postRegister } from "../../utils/https/Auth";
import { profilePatch } from "../../utils/https/profile";

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

export const logoutAction = (token) => {
  return {
    type: SIGN_OUT,
    payload: deleteLogout(token),
  };
};

export const patchProfileAction = (body, token) => {
  return {
    type: "PATCH_PROFILE",
    payload: profilePatch(body, token),
  };
};
