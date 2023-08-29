import { useEffect, useState } from 'react';
import { getLogin } from 'utils/sessions';
import useAuthStore from 'store/useAuthStore'

export default function UseAuth() {
  const user = useAuthStore((state) => state.User);
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
