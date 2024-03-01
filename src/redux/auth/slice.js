import { createSlice } from '@reduxjs/toolkit';
import { current, login, logout, register } from './operations';

const onPanding = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = ( state, { payload } ) => {
  state.isLoading = false;
  state.error = payload;
  state.token = null;
  state.refreshToken = null;
  console.warn( 'Error payload :>> ', payload );
};

const handleRegister = ( state, { payload } ) => {
  state.user = payload; // added to state name and email
  state.isLoading = false;
  console.log( 'Register payload :>> ', payload );
};

const handleLogin = ( state, { payload } ) => {
  state.user = payload; // added to state name and email
  state.token = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.isLoggedIn = true;
  state.isLoading = false;
  console.log( 'Login payload :>> ', payload );
};

const handleLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.refreshToken = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};

const handleCurrent = ( state, { payload } ) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isLoading = false;
  console.log( 'Current payload :>> ', payload );
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice( {
  name: 'auth',
  initialState,

  reducers: {
    setToken( state, { payload } ) {
      state.token = payload;
      state.isLoggedIn = payload; // ---------- TEMP
    },
    setRefreshToken( state, { payload } ) {
      state.refreshToken = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase( register.fulfilled, handleRegister )
      .addCase( login.fulfilled, handleLogin )
      .addCase( logout.fulfilled, handleLogout )
      .addCase( current.fulfilled, handleCurrent )
      .addMatcher( action => {
        return action.type.endsWith( '/pending' ); // applies to all pending
      }, onPanding )
      .addMatcher( action => {
        return action.type.endsWith( '/rejected' ); // applies to all rejected
      }, handleRejected );
  },
} );

export const { setToken, setRefreshToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
