import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  withCredentials: true,
  headers: {
    "bypass-tunnel-reminder": "anyvalue",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["bypass-tunnel-reminder"] = "anyvalue";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;