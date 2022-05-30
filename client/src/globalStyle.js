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
    &::-webkit-scrollbar{
        display: none;
    }
}

    
body{
    height: 100vh;
     transition: top .5s ease;
    background-color: #0F171E;
    
    @media (max-width: 800px) {

font-size:1rem;
                }
    
 
}

`;

export default GlobalStyle;
