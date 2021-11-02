import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

export const profilePatch = (data, token) => {
  return axios.patch(`${url}/users/edit-user`, data, {
    headers: {
      "x-access-token": `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  });
};
