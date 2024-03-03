import React from 'react';
import { useDispatch } from 'react-redux';
import {
  initialState,
  setReset,
  setRefreshToken,
  setToken,
} from '../../redux/auth/slice';
import { Button } from 'components/common/button/Button';

export const Out = () => {
  const dispatch = useDispatch();

  const signout = () => {
    dispatch( setToken( null ) );
    dispatch( setRefreshToken( null ) );
    dispatch( setReset( initialState ) );
  };
  return (
    <>
      <Button type="button" onClick={ signout }>
        Вийти
      </Button>
    </>
  );
};
