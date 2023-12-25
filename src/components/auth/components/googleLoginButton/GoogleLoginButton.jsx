import React from 'react';

import { GoogleLogin } from '@react-oauth/google';

export const GoogleLoginButton = () => {
  const onGoogleSuccess = ( tokenResponse ) => {
    console.log( 'success', tokenResponse );
  };

  const onGoogleError = ( error ) => {
    console.log( 'error', error );
  };

  return (
    <GoogleLogin
      onSuccess={ onGoogleSuccess }
      onFailure={ onGoogleError }
      text=""
      theme="outline"
      type="icon"
      shape="circle"
      containerProps={ {
        style: {
          height: '60px',
          borderRadius: '20px 0px 20px 0px',
          textAlign: 'center',
          outline: 'none',
          cursor: 'pointer',
          width: '217px',
          color: '#FFFFFF',
          border: '1px solid #2D2D2D33',
          background: '#2D2D2D33',
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      } }
    />
  );
};
