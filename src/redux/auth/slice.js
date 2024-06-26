import { createSlice } from '@reduxjs/toolkit';
import {
  changePassword,
  updateStudentDetails,
  getStudentProfile,
  getTeacherProfile,
  login,
  register,
  deleteAccountStudent,
} from './operations';

const onPanding = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = ( state, { payload } ) => {
  state.isLoading = false;
  state.error = payload;
  state.token = null;
  state.refreshToken = null;
};

const handleRegister = ( state, { payload } ) => {
  // state.user = payload; // added to state name and email
  state.isLoading = false;
};

const handleLogin = ( state, { payload } ) => {
  state.token = payload.access_token;
  state.refreshToken = payload.refresh_token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.role = payload.role;
};

const handleChangePassword = ( state, { payload } ) => {
  state.token = '';
  state.refreshToken = '';
  state.isLoggedIn = false;
  state.isLoading = false;
  console.log( 'Change Password :>> ', payload );
};

const handleTeacherProfile = ( state, { payload } ) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const handleStudentProfile = ( state, { payload } ) => {
  state.user = { ...state.user, ...payload }; // ???
  state.isLoggedIn = true;
  state.isLoading = false;
};

const handleDeleteAccountStudent = ( state, { payload } ) => {
  state.token = '';
  state.refreshToken = '';
  state.isLoggedIn = false;
  state.isLoading = false;
  console.log( 'DeleteAccount :>> ', payload );
};

export const initialState = {
  user: { name: null, email: null, avatar: '' },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isLoading: false,
  role: null,
};

const authSlice = createSlice( {
  name: 'auth',
  initialState,

  reducers: {
    setToken( state, { payload } ) {
      state.token = payload;
    },
    setRefreshToken( state, { payload } ) {
      state.refreshToken = payload;
    },
    setReset( state ) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.refreshToken = initialState.refreshToken;
      state.isLoggedIn = initialState.isLoggedIn;
      state.role = initialState.role;
    },
  },

  extraReducers: builder => {
    builder
      .addCase( register.fulfilled, handleRegister )
      .addCase( login.fulfilled, handleLogin )
      .addCase( getStudentProfile.fulfilled, handleStudentProfile )
      .addCase( updateStudentDetails.fulfilled, handleStudentProfile )
      .addCase( changePassword.fulfilled, handleChangePassword )
      .addCase( deleteAccountStudent.fulfilled, handleDeleteAccountStudent )
      .addCase( getTeacherProfile.fulfilled, handleTeacherProfile )
      .addMatcher( action => {
        return action.type.endsWith( '/pending' ); // applies to all pending
      }, onPanding )
      .addMatcher( action => {
        return action.type.endsWith( '/rejected' ); // applies to all rejected
      }, handleRejected );
  },
} );

export const { setToken, setRefreshToken, setReset } = authSlice.actions;
export const authReducer = authSlice.reducer;
