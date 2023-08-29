import React, { useEffect } from 'react';

import Toast from 'components/Toast';
import useToast from 'hooks/useToast';
import { useNavigate } from 'react-router-dom';
import useUIStore from 'store/useUIStore';
import useAuthStore from 'store/useAuthStore';
import { getLogin } from 'utils/sessions';
import http from 'utils/request';

import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import Theme from 'theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ErrorBoundary from './ErrorBoundary';
import Router from './Router';

export default function App() {
  const navigate = useNavigate();
  const uiStore = useUIStore();
  const user = useAuthStore((state) => state.User);
  const { state, closeToast } = useToast();

  useEffect(() => {
    if (getLogin()?.accessToken) {
      http.defaults.headers.common.Authorization = `Bearer ${
        getLogin().accessToken
      }`;
    }
  }, [user]);

  useEffect(() => {
    if (uiStore.navigate) {
      navigate(`${uiStore.navigate}`);
    }
  }, [uiStore.navigateChangedCount]);

  return (
    <ErrorBoundary>
      <Router />
      <Toast
        open={state.open}
        headMsg={state.headMsg}
        message={state.message}
        severity={state.severity}
        deleted={state.deleted}
        duration={state.duration}
        handleClose={closeToast}
      />
    </ErrorBoundary>
  );
}
