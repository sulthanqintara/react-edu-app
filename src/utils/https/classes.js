import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;

export const getClasses = (query) => {
  const token = localStorage.getItem("token");
  const body = {};
  return axios.get(`${url}/classes/${query}`, body, {
    headers: { "x-access-token": `Bearer ${token}` },
  });
};

export const getClassByUser = (query) => {
  const token = localStorage.getItem("token");
  const body = {};
  return axios.get(`${url}/users/classes/${query}`, body, {
    headers: { "x-access-token": `Bearer ${token}` },
  });
};
