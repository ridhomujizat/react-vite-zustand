// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie';
import { encode, decode } from 'utils/encrypt';
import { Login } from 'models';

const LOGIN_STORAGE = 'lgstr';

export const setLogin = (state: Login) => {
  Cookies.set(LOGIN_STORAGE, encode(state));
};

export const getLogin = () => {
  const binary = Cookies.get(LOGIN_STORAGE) as string;
  return decode(binary) as Login;
};

export const removeLogin = () => {
  Cookies.remove(LOGIN_STORAGE);
};
