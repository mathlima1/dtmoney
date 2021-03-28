import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --text: #969CB3;
        --title: #363F5F;
        --shape: #FFFFFF;
        --red: #E62E4D;
        --green: #33CC95;
        --blue: #5429CC;
        --blue-light: #6933ff;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5,h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    .react-modal-overlay{
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .react-modal-content{
        background-color: var(--background);
        position: relative;
        width: 100%;
        max-width: 576px;
        padding: 3rem;
        border:none;
        border-radius: 5px;
        outline-color: var(--background);
    }
    .react-modal-close{
        position: absolute;
        top: 1.25rem;
        right: 1.25rem;
        border: none;
        background:transparent;

        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.7)
        }
    }
`