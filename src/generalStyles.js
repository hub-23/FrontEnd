import { createGlobalStyle } from 'styled-components';
import nunito from './fonts/Nunito.woff2';
import montserrat from './fonts/Montserrat.woff2';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Nunito';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${nunito}) format('woff2');
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${montserrat}) format('woff2');
  }

  * {
    font-family: Nunito;
    font-size: 14px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a, button {
    cursor: pointer;
    text-decoration: unset;
  }

  ul, ol {
  list-style: none;
}
`;

export default GlobalStyles;
