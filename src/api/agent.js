import axios from "axios";
axios.defaults.baseURL = "https://localhost:7093/api/v1";
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const response = await axios.get("/auth/refresh", {
        // withCredentials: true,
      });
      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;

        return axios(error.config);
      }
    }
    return error;
  }
);
