import { createGlobalStyle } from 'styled-components';
import nunito from './fonts/Nunito.ttf';
import montserrat from './fonts/Montserrat.ttf';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Nunito';
    src: url(${nunito});
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${montserrat});
  }

  * {
    font-family: Nunito;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
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
