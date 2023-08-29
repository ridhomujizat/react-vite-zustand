/* eslint-disable import/no-cycle */
import { LazyExoticComponent, lazy } from 'react';
import { RoleAuth } from 'models';

const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));
// auth
const Login = lazy(() => import('pages/Auth/Login'));
// Dashboard
const Dashboard = lazy(() => import('pages/Dashboard'));


export interface ListRouteProps {
  comp: LazyExoticComponent<() => JSX.Element>;
  path: string;
  index: boolean;
  layout: 'Dashboard' | 'Plain';
  auth: 'Public' | 'AllRole' | 'NoAuth' | RoleAuth[];
}

const ListRoute: ListRouteProps[] = [
  {
    comp: Home,
    path: '/',
    index: true,
    layout: 'Plain',
    auth: 'Public',
  },
  {
    comp: Login,
    path: '/login',
    index: true,
    layout: 'Plain',
    auth: 'NoAuth',
  },
  {
    comp: Dashboard,
    path: '/dashboard',
    layout: 'Dashboard',
    index: true,
    auth: 'AllRole',
  },
  {
    comp: NotFound,
    path: '*',
    layout: 'Plain',
    index: false,
    auth: 'Public',
  },
];

export default ListRoute;
