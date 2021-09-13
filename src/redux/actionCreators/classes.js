import { GET_CLASSES, GET_CLASS_BY_USER } from "../actionCreators/actionString";
import { getClasses, getClassByUser } from "../../utils/https/classes";

export const getClassAction = (body) => {
  return {
    type: GET_CLASSES,
    payload: getClasses(body),
  };
};
export const getClassByUserAction = (body) => {
  return {
    type: GET_CLASS_BY_USER,
    payload: getClassByUser(body),
  };
};
