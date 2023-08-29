import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import useToast from 'hooks/useToast';

import Logo from 'components/Logo';
import UseAuth from 'hooks/useAuth';

export default function Home() {
  const navigate = useNavigate();
  const { isLogin } = UseAuth();

  useEffect(() => {
    if (isLogin) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Logo type="blue" width={400} />
    </Box>
  );
}
