import axios from 'axios';
import { removeLogin, getLogin } from 'utils/sessions';

const { VITE_APP_API_URL } = import.meta.env;

const http = axios.create({
  baseURL: VITE_APP_API_URL,
});

const getToken = () => {
  const auth = getLogin();
  if (auth) {
    return auth.accessToken;
  }
  return false;
};

const token = getToken();

if (token) {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response !== undefined) {
      if (error.response.status === 401) {
        removeLogin();
        window.location.replace('/login');
      }
    }
    return Promise.reject(error);
  },
);

export default http;
