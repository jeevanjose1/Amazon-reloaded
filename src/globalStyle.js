import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
box-sizing: border-box;
}
html{
    font-size: 10px;
    font-family: 'Poppins', sans-serif;
}
body{
    
    background-color: #0F171E;
    overflow-x: hidden;
}

`;

export default GlobalStyle;
