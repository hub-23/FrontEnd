import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { setRefreshToken, setToken } from './slice';
// import { store } from '../store';

const instance = axios.create( {
  baseURL: 'https://hub23-9drt.onrender.com',
} );

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  // instance.defaults.headers.common.Authorization = '';
  console.log( 'removed accessToken from header' );
};

/* 💙💛  */
// instance.interceptors.response.use(
//   response => response,
//   async error => {
//     if ( error.response.status === 401 ) {
//       const refreshToken = store.getState().auth.refreshToken;
//       console.log( 'Old refreshToken :>> ', refreshToken );
//       if ( !refreshToken ) return;
//       setAuthHeader( refreshToken );

//       try {
//         const { data } = await instance.get( '/api/auth/refresh_token' );
//         console.log( 'Created new accessToken & refreshToken', data );
//         // setAuthHeader( data.access_token );
//         store.dispatch( setToken( data.access_token ) );
//         store.dispatch( setRefreshToken( data.refresh_token ) );

//         return instance( error.config );
//       } catch ( error ) {
//         return Promise.reject( error );
//       }
//     }
//     return Promise.reject( error );
//   }
// ); // if status 401 - accessToken is not valid, then interseptors will work

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
