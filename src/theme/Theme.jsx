import React from 'react';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#2D2D2D',
    primary: '#113268',
    accent: '#E3669C',
    grey: '#2D2D2D33',
    grayStroke: '#D5D5D5',
    grayText: '#797979',
    liner_pink: 'linear-gradient(88deg, #B92759 0%, #E3669C 100%)',
    liner_blue: 'linear-gradient(87.92deg, #09194D 0%, #234890 100%)',
    // eslint-disable-next-line max-len
    liner_grey:'linear-gradient(0deg, rgba(45, 45, 45, 0.2), rgba(45, 45, 45, 0.2)), linear- gradient(0deg, rgba(221, 221, 221, 0.866667), rgba(221, 221, 221, 0.866667))',
  },
  fontFamily: {
    primary: 'Nunito',
    secondary: 'Manrope',
  },
};

const Theme = ( { children } ) => {
  return (
    <StyleSheetManager shouldForwardProp={ shouldForwardProp }>
      <ThemeProvider theme={ theme }>{children}</ThemeProvider>
    </StyleSheetManager>
  );
};

/**
 *  @param {int}  propName This implements the default behavior from styled-components v5
 *  @param {int}  target For HTML elements, forward the prop if it is a valid HTML attribute
 * @return {int} For other elements, forward all props
 */
function shouldForwardProp( propName, target ) {
  if ( typeof target === 'string' ) {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid( propName );
  }
  // For other elements, forward all props
  return true;
}
export default Theme;
