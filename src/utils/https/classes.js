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

export const createClass = (data) => {
  const token = localStorage.getItem("token");
  return axios.post("http://localhost:8000/classes", data, {
    headers: { "x-access-token": `Bearer ${token}` },
  });
};
