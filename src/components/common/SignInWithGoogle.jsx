import React from 'react';

import { GoogleLogin } from '@react-oauth/google';

export const SignInWithGoogle = () => {
  const onSuccess = ( tokenResponse ) => {
    console.log( 'success', tokenResponse );
  };

  const onError = ( error ) => {
    console.log( 'error', error );
  };

  return (
    <GoogleLogin
      onSuccess={ onSuccess }
      onFailure={ onError }
      text="continue_with"
      theme="outline"
      type="icon"
      shape="pill"
      logo_alignment="center"
      useOneTap
    />
  );
};
