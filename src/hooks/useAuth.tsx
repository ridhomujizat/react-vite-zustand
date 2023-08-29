import { useAppSelector } from 'store/hooks';
import { useEffect, useState } from 'react';
import { getLogin } from 'utils/sessions';

export default function UseAuth() {
  const user = useAppSelector((state) => state.auth.User);
  const [auth, setAuth] = useState(getLogin());

  useEffect(() => {
    setAuth(getLogin());
  }, [user]);

  return {
    auth,
    isLogin: Boolean(auth.accessToken),
    role: auth?.role?.name,
  };
}
