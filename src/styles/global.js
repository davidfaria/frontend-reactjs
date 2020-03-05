import { createGlobalStyle } from 'styled-components';

// import { lighten } from 'polished';
// import colors from '~/styles/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /* list-style: none;
    text-decoration: none; */
  }

  *:focus {
    outline: 0;
  }


  html, body, #root {
    height: 100%;
    font-family: 'Roboto', sans-serif !important;
  }

  body {
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;

  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
