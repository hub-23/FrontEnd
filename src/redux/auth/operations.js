import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create( {
  baseURL: 'https://hub23-84u3.onrender.com',
} );

export const setAuthHeader = token => {
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

      console.log( 'dataLogin :>> ', data );

      // const { data: dataUsersRole } = await instance.get( '/users/me/role' );
      // console.log( 'dataUsersRole :>> ', dataUsersRole );

      return data;
    } catch ( error ) {
      return thunkAPI.rejectWithValue( error.message );
    }
  }
);

// Student Profile
export const getStudentProfile = createAsyncThunk(
  'auth/studentProfile',
  async ( _, thunkAPI ) => {
    const { token } = await thunkAPI.getState().auth;

    if ( !token ) return thunkAPI.rejectWithValue( 'No valid token' );
    setAuthHeader( token );

    try {
      const { data } = await instance.get( '/customers/student_profile' );
      console.log( 'data :>> ', data );

      return data;
    } catch ( error ) {
      return thunkAPI.rejectWithValue( error.message );
    }
  }
);

// Update Student Details
export const updateStudentDetails = createAsyncThunk(
  'customers/updateStudentDetails',
  async ( credentials, thunkAPI ) => {
    try {
      const res = await instance.post(
        '/customers/update_student_details',
        credentials
      );
      return res.data;
    } catch ( error ) {
      return thunkAPI.rejectWithValue( error.message );
    }
  }
);

// Teacher Profile
export const getTeacherProfile = createAsyncThunk(
  'auth/teacherProfile',
  async ( _, thunkAPI ) => {
    const { token } = await thunkAPI.getState().auth;

    if ( !token ) return thunkAPI.rejectWithValue( 'No valid token' );
    setAuthHeader( token );

    try {
      const { data } = await instance.get( '/customers_teacher/teacher_profile' ); // Route doesn't work !!!
      console.log( 'dataTeacherProfile :>> ', data );

      return data;
    } catch ( error ) {
      return thunkAPI.rejectWithValue( error.message );
    }
  }
);

// changePassword
export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ( params, thunkAPI ) => {
    try {
      const { data } = await instance.post( '/api/auth/change_password', null, {
        params,
      } );
      clearAuthHeader();
      console.log( 'data', data );

      return data;
    } catch ( error ) {
      return thunkAPI.rejectWithValue( error.message );
    }
  }
);

// deleteStudentAccount
export const deleteAccountStudent = createAsyncThunk(
  'auth/deleteAccountStudent',
  async ( _, { rejectWithValue } ) => {
    try {
      const response = await instance.delete(
        '/customers/delete_account_student'
      );
      clearAuthHeader();
      return response.data;
    } catch ( error ) {
      return rejectWithValue( error.response.data );
    }
  }
);
