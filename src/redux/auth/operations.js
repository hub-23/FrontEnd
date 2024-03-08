import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create( {
  // baseURL: 'https://hub23-9drt.onrender.com',
  baseURL: 'https://hub23-84u3.onrender.com',
} );

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

// signup
export const register = createAsyncThunk(
  'auth/register',
  async ( credentials, thunkAPI ) => {
    try {
      const res = await instance.post( '/api/auth/signup', credentials );

      return res.data;
    } catch ( error ) {
      return thunkAPI.rejectWithValue( error.message );
    }
  }
);

// signin
export const login = createAsyncThunk(
  'auth/login',
  async ( credentials, thunkAPI ) => {
    try {
      const { data } = await instance.post( '/api/auth/login', credentials );
      setAuthHeader( data.access_token );

      return data;
    } catch ( error ) {
      return thunkAPI.rejectWithValue( error.message );
    }
  }
);

// UserData
export const getUserData = createAsyncThunk(
  'auth/userData',
  async ( _, thunkAPI ) => {
    const { token } = await thunkAPI.getState().auth;

    if ( !token ) return thunkAPI.rejectWithValue( 'No valid token' );
    setAuthHeader( token );

    try {
      const { data } = await instance.get( '/users/me' );

      return data;
    } catch ( error ) {
      return thunkAPI.rejectWithValue( error.message );
    }
  }
);
