import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setRefreshToken } from './slice';
import { store } from '../store';

const instance = axios.create( {
  baseURL: 'https://hub23-9drt.onrender.com/api/auth',
} );

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
  console.log( 'clearAuthHeader' );
};

/* 💙💛  */
instance.interceptors.response.use(
  response => response,
  async error => {
    if ( error.response.status === 401 ) {
      const refreshToken = store.getState().auth.refreshToken;

      try {
        const { data } = await instance.post( '/refresh', { refreshToken } );
        console.log( 'Created new accessToken & refreshToken' );
        setAuthHeader( data.accessToken );
        // store.dispatch(setToken(data.accessToken));
        store.dispatch( setRefreshToken( data.refreshToken ) );

        return instance( error.config );
      } catch ( error ) {
        return Promise.reject( error );
      }
    }
    return Promise.reject( error );
  }
); // if status 401 - accessToken is not valid, then interseptors will work

// signup
export const register = createAsyncThunk(
  'auth/register',
  async ( credentials, thunkAPI ) => {
    try {
      const res = await instance.post( '/signup', credentials );

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
      const res = await instance.post( '/login', credentials );

      setAuthHeader( res.data.accessToken );
      console.log( 'Your is Login' );

      return res.data;
    } catch ( error ) {
      return thunkAPI.rejectWithValue( error.message );
    }
  }
);

// signout
export const logout = createAsyncThunk( 'auth/logout', async ( _, thunkAPI ) => {
  try {
    await instance.post( '/signout' );
    clearAuthHeader();
  } catch ( error ) {
    return thunkAPI.rejectWithValue( error.message );
  }
} );

// current
export const current = createAsyncThunk( 'auth/current', async ( _, thunkAPI ) => {
  const token = await thunkAPI.getState().auth.token;
  if ( !token ) return thunkAPI.rejectWithValue( 'No valid token' );
  // setAuthHeader(token);
  try {
    const res = await instance.get( '/current' );

    return res.data;
  } catch ( error ) {
    // clearAuthHeader();
    return thunkAPI.rejectWithValue( error.message );
  }
} );
