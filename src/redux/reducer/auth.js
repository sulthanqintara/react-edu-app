import { SIGN_IN, SIGN_OUT, REGISTER } from "../actionCreators/actionString";
import { ActionType } from "redux-promise-middleware";

const defaultState = {
  authInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  isLogin: localStorage.getItem("userInfo") ? true : false,
  error: {},
};

const authReducer = (prevstate = defaultState, action) => {
  const { Pending, Fulfilled, Rejected } = ActionType;
  switch (action.type) {
    case SIGN_IN.concat("_", Pending):
      return {
        ...prevstate,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case SIGN_IN.concat("_", Rejected):
      return {
        ...prevstate,
        isPending: false,
        isRejected: true,
        error: action.payload,
      };
    case SIGN_IN.concat("_", Fulfilled):
      localStorage.setItem("token", String(action.payload.data.result.token));
      localStorage.setItem(
        "userInfo",
        JSON.stringify(action.payload.data.result.userInfo)
      );
      return {
        ...prevstate,
        isPending: false,
        isFulfilled: true,
        authInfo: action.payload.data.result.userInfo,
        isLogin: true,
      };
    case SIGN_OUT.concat("_", Pending):
      return {
        ...prevstate,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case SIGN_OUT.concat("_", Rejected):
      return {
        ...prevstate,
        isPending: false,
        isRejected: true,
        error: action.payload,
      };
    case SIGN_OUT.concat("_", Fulfilled):
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      return {
        ...prevstate,
        isPending: false,
        isFulfilled: true,
        authInfo: action.payload.data.result,
        isLogin: false,
      };
    case REGISTER.concat("_", Pending):
      return {
        ...prevstate,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case REGISTER.concat("_", Rejected):
      return {
        ...prevstate,
        isPending: false,
        isRejected: true,
        error: action.payload,
      };
    case REGISTER.concat("_", Fulfilled):
      return {
        ...prevstate,
        isPending: false,
        isFulfilled: true,
        authInfo: action.payload.data.result,
      };
    case "PATCH_PROFILE".concat("_", Pending):
      return {
        ...prevstate,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "PATCH_PROFILE".concat("_", Rejected):
      return {
        ...prevstate,
        isPending: false,
        isRejected: true,
        error: action.payload,
      };
    case "PATCH_PROFILE".concat("_", Fulfilled):
      console.log(action.payload);
      localStorage.setItem(
        "userInfo",
        JSON.stringify(action.payload.data.result)
      );
      return {
        ...prevstate,
        isPending: false,
        isFulfilled: true,
        authInfo: action.payload.data.result,
      };
    default:
      return prevstate;
  }
};

export default authReducer;
