import React from 'react'
import { Navigate } from 'react-router-dom';


const checkUserAuthentication = () => {
  return true;
};


const PrivateRoute = ({ children }) => {
  const isAuthenticated = checkUserAuthentication();
  return isAuthenticated ? children : <Navigate to="/react-dashboard/login" />;

}

export default PrivateRoute;