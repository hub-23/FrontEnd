export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsLoading = state => state.auth.isLoading;
export const selectToken = state => state.auth.token;
export const selectIsError = state => state.auth.error;
export const selectUserRole = state => state.auth.role;
