import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;
export const postLogin = (body) => {
  return axios.post(`${url}/auth/signin`, body);
};

export const postRegister = (body) => {
  return axios.post(`${url}/auth/register`, body);
};

export const deleteLogout = () => {
  const token = localStorage.getItem("token");
  return axios.delete(`${url}/auth/signout`, { token: token });
};
