import axios from "axios";
export default {
  Validate: (data) => {
    return axios.post("http://localhost:5000/api/login/validate", data);
  },
  Login: (data, token) => {
    return axios.post("http://localhost:5000/api/login", data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};
