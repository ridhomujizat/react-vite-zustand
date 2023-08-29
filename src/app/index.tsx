import React, { useEffect } from 'react';

import Toast from 'components/Toast';
import useToast from 'hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { getLogin } from 'utils/sessions';
import http from 'utils/request';

import ErrorBoundary from './ErrorBoundary';
import Router from './Router';

export default function App() {
  const navigate = useNavigate();
  const uiStore = useAppSelector((state) => state.ui);
  const user = useAppSelector((state) => state.auth.User);
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
