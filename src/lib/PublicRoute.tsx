import React from 'react';
import {Navigate} from 'react-router-dom';
import isLogin from './isLogin';

const PublicRoute = ({restricted, children}: any) => {
  return isLogin() && restricted ? <Navigate to="/" /> : children;
};

export default PublicRoute;
