import { GET_CLASSES, GET_CLASS_BY_USER } from "../actionCreators/actionString";
import { ActionType } from "redux-promise-middleware";

const defaultState = {
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: {},
  data: {},
  dataPerUser: {},
};

const classesReducer = (prevstate = defaultState, action) => {
  const { Pending, Fulfilled, Rejected } = ActionType;
  switch (action.type) {
    case GET_CLASSES.concat("_", Pending):
      return {
        ...prevstate,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case GET_CLASSES.concat("_", Rejected):
      return {
        ...prevstate,
        isPending: false,
        isRejected: true,
        error: action.payload,
        data: {},
      };
    case GET_CLASSES.concat("_", Fulfilled):
      return {
        ...prevstate,
        isPending: false,
        isRejected: false,
        isFulfilled: true,
        data: action.payload,
      };
    case GET_CLASS_BY_USER.concat("_", Pending):
      return {
        ...prevstate,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case GET_CLASS_BY_USER.concat("_", Rejected):
      return {
        ...prevstate,
        isPending: false,
        isRejected: true,
        error: action.payload,
      };
    case GET_CLASS_BY_USER.concat("_", Fulfilled):
      return {
        ...prevstate,
        isPending: false,
        isRejected: false,
        isFulfilled: true,
        dataPerUser: action.payload,
      };
    default:
      return defaultState;
  }
};

export default classesReducer;
