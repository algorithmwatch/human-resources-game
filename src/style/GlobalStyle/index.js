import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`  
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-family: 'Open Sans', sans-serif;
    background-color: #f7f7f7;
    font-size: 100%;
  }

  #root {
    min-height: 100vh;
    padding-bottom: 60px;
  }
`;
