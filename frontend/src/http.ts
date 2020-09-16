import axios from "axios";

axios.defaults.timeout = 60000;
// Send the cookies by defaults, must set to false with connect with other api
axios.defaults.withCredentials = true;
// The baseURL is set using the environment variable that would automatically replace to the actual server.
// When development, using the relative url like "/login" would pointing to "VUE_APP_SERVER_LOCATION/login"
axios.defaults.baseURL = process.env.VUE_APP_SERVER_LOCATION;

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);
export default axios;
