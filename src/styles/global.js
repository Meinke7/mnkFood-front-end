import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        color: ${({theme}) => theme.COLORS.WHITE_900};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.35s;
    }

    button:hover, a:hover {
        filter: brightness(0.8);
    }

    .hidden, #hidden{
        display: none;
    }

    .addMarginUser{
        margin: 100px -190px;
    }
    
    .addMarginAdmin{
        margin: 50px -10px;
    }

    @keyframes screenScale{
        0%{
            transform: scale(0.7); 
            opacity: 0;
        }
        100%{
            transform: scale(1);
            opacity: 1;
        }
    }

    `