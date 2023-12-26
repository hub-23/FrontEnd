
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#2D2D2D',
    primary: '#113268',
    accent: '#E3669C',
    grey: '#2D2D2D33',
    liner_pink: 'linear-gradient(88deg, #B92759 0%, #E3669C 100%)',
    liner_blue: 'linear-gradient(87.92deg, #09194D 0%, #234890 100%)',
    // eslint-disable-next-line max-len
    liner_grey: 'linear-gradient(0deg, rgba(45, 45, 45, 0.2), rgba(45, 45, 45, 0.2)), linear- gradient(0deg, rgba(221, 221, 221, 0.866667), rgba(221, 221, 221, 0.866667))',
  },
  fontFamily: {
    primary: 'Nunito',
    secondary: 'Manrope',
  },
};

const Theme = ( { children } ) => {
  return (
    <ThemeProvider theme={ theme }>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
