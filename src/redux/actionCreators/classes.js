import { GET_CLASSES, GET_CLASS_BY_USER } from "../actionCreators/actionString";
import { getClasses, getClassByUser } from "../../utils/https/classes";

export const getClassAction = (query) => {
  return {
    type: GET_CLASSES,
    payload: getClasses(query),
  };
};
export const getClassByUserAction = (query) => {
  return {
    type: GET_CLASS_BY_USER,
    payload: getClassByUser(query),
  };
};
