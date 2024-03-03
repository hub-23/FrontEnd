import React from 'react';
import { useDispatch } from 'react-redux';
import {
  initialState,
  setReset,
  setRefreshToken,
  setToken,
} from '../../redux/auth/slice';
import { Button } from 'components/common/button/Button';
import { clearAuthHeader } from '../../redux/auth/operations';

export const Out = () => {
  const dispatch = useDispatch();

  const signout = () => {
    dispatch( setToken( null ) );
    dispatch( setRefreshToken( null ) );
    dispatch( setReset( initialState ) );
    clearAuthHeader();
  };
  return (
    <>
      <Button type="button" onClick={ signout }>
        Вийти
      </Button>
    </>
  );
};
