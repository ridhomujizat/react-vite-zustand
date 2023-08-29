/* eslint-disable import/order */
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import ListRoute from './ListRoute';

// Layout
import DashLayout from 'components/Layout/Dashboard/layout';

export default function IndexRoute() {
  const { role, isLogin } = useAuth();

  const routeByAuth = ListRoute.filter((val) => {
    switch (val.auth) {
      case 'Public':
        return true;
      case 'AllRole':
        return isLogin;
      case 'NoAuth':
        return !isLogin;
      default:
        if (typeof val.auth === 'object') {
          return val.auth.includes(role);
        }
        return false;
    }
  });

  return (
    <Routes>
      {routeByAuth.map((val, index) => {
        return (
          <Route
            index={val.index}
            path={val.path}
            key={index}
            element={
              val.layout === 'Dashboard' ? (
                <DashLayout>
                  <Suspense>
                    <val.comp />
                  </Suspense>
                </DashLayout>
              ) : (
                <Suspense>
                  <val.comp />
                </Suspense>
              )
            }
          />
        );
      })}
    </Routes>
  );
}
