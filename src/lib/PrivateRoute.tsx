import React from 'react';
import {Navigate} from 'react-router-dom';
import isLogin from './isLogin';

const PrivateRoute = ({children}: any) => {
  return isLogin() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
