import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    :root {
        --orange: #FF5276;
        --orange-light: #fe8d79;
        
        --blue: #36A5F0;
        --blue-light: #A4DBFF;

        --text: #969CB3;

        --background: #0d1015;
        --background-light: #171b24;
        --shape: #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop padrão do React)
    html {
        @media (min-width: 1080px) {
            font-size: 93.75%; //15px
    }
        @media (min-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    //REM = 'rem = 16px';

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif; 
        font-weight: 400;   
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

`;