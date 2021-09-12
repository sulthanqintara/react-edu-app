import { GET_CLASSES } from "../actionCreators/actionString";
import { getClasses } from "../../utils/https/classes";

export const getClassAction = (body) => {
  return {
    type: GET_CLASSES,
    payload: getClasses(body),
  };
};
