import axios from "axios";

export const profilePatch = (data, token) => {
  return axios.patch(`http://localhost:8000/users/edit-user`, data, {
    headers: {
      "x-access-token": `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  });
};
