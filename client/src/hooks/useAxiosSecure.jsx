import axios from "axios";
import { auth } from "../firebase/firebase.config";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

axiosSecure.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;

    if (user) {
      const token = await user.getIdToken();
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosSecure;
