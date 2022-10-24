import axios from "axios";

axios.defaults.baseURL = "https://localhost:7093/api/v1";
axios.defaults.withCredentials = true;

const responseBody = (response) => response.data;

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        localStorage.removeItem("jwt");
        originalConfig._retry = true;
        try {
          const rs = await axios.get("/auth/refresh", {
            withCredentials: true,
          });

          const { accessToken, username } = rs.data;
          axios.headers.Authorization = `Bearer ${accessToken}`;
          localStorage.setItem("jwt", accessToken);

          return axios(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

const Conversations = {
  getUserConversations: () =>
    axios
      .get("/conversation/userConversations", {
        withCredentials: true,
      })
      .then(responseBody),
  getConversations: (id) =>
    axios
      .get(`/conversation/${id}`, {
        withCredentials: true,
      })
      .then(responseBody),
  createConversation: (recipientUsername) =>
    axios
      .post(`/conversation/${recipientUsername}`, {
        withCredentials: true,
      })
      .then(responseBody),
};

const User = {
  login: ({ userName, password }) =>
    axios.post("/auth/login", { userName, password }).then(responseBody),
  register: ({ username, email, password, confirmPassword }) =>
    axios.post("auth/register", { username, email, password, confirmPassword }),
};

export default {
  Conversations,
  User,
};
