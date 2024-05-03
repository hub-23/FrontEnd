import { createSlice } from '@reduxjs/toolkit';
import { getStudentProfile, login, register } from './operations';

const onPanding = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = ( state, { payload } ) => {
  state.isLoading = false;
  state.error = payload;
  state.token = null;
  state.refreshToken = null;
  // console.warn( 'Error payload :>> ', payload );
};

const handleRegister = ( state, { payload } ) => {
  // state.user = payload; // added to state name and email
  state.isLoading = false;
  // console.log( 'Register payload :>> ', payload );
};

const handleLogin = ( state, { payload } ) => {
  state.token = payload.access_token;
  state.refreshToken = payload.refresh_token;
  state.isLoggedIn = true;
  state.isLoading = false;
  // console.log( 'Login payload :>> ', payload );
};

const handleStudentProfile = ( state, { payload } ) => {
  state.user = { ...state.user, ...payload };
  state.isLoggedIn = true;
  state.isLoading = false;
  // console.log( 'UserData payload :>> ', payload );
};

export const initialState = {
  user: { name: null, email: null, avatar: '' },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isLoading: false,
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
    setReset( state, { payload } ) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = payload.isLoggedIn;
    },
  },

  extraReducers: builder => {
    builder
      .addCase( register.fulfilled, handleRegister )
      .addCase( login.fulfilled, handleLogin )
      .addCase( getStudentProfile.fulfilled, handleStudentProfile )
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
