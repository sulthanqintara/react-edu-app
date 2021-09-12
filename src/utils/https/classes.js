import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;

export const getClasses = (body) => {
  return axios.post(`${url}/classes`, body);
};
