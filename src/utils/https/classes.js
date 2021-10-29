import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;

export const getClasses = (query) => {
  return axios.get(`${url}/classes/${query}`)
};

export const getClassByUser = (query) => {
  return axios.get(`${url}/users/classes/${query}`)
};

export const createClass = (data) => {
  const token = localStorage.getItem("token");
  return axios.post("http://localhost:8000/classes", data, {
    headers: { "x-access-token": `Bearer ${token}` },
  });
};

export const detailClass = (id) => {
  const token = localStorage.getItem("token");
  return axios.get(`http://localhost:8000/classes/${id}`, {
    headers: { "x-access-token": `Bearer ${token}` },
  });
};

export const registerClass = (data) => {
  const token = localStorage.getItem("token");
  return axios.post(`http://localhost:8000/classes/apply`, data, {
    headers: { "x-access-token": `Bearer ${token}` },
  });
};

export const updateClass = (id, data) => {
  const token = localStorage.getItem("token");
  return axios.patch(`http://localhost:8000/classes/${id}`, data, {
    headers: { "x-access-token": `Bearer ${token}` },
  });
};
