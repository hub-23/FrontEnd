import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ( { component, redirectTo = '/' } ) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? component : <Navigate to={ redirectTo } />;
};
