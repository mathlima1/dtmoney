import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`
    h2{
        color: var(--title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        background-color: #e7e9ee;
        border: 1px solid #D7D7D7;

        font-size: 1rem;
        font-weight: 400;

        &::placeholder{
            color: var(--text);
        }
        & + input{
            margin-top: 1rem;
        }

    }

    button[type="submit"]{
        width: 100%;
        height: 4rem;
        border: none;  
        border-radius: 0.25rem;
        margin-top: 1rem;

        background-color: var(--green);
        color: #ffffff;
        font-size: 1rem;
        font-weight:600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }
    }
`;

export const TypeTransactionContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem; 
`;

interface RadioBoxProps {
    isActive: boolean,
    activeColor: 'green' | 'red'
}
const colors = {
    green: '#33CC95',
    red: '#E62E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    background: ${props => props.isActive
        ? transparentize(0.8, colors[props.activeColor]) :
        'transparent'};
    border: 1px solid #d7d7d7;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: border-color 0.2s;
    &:hover{
        border-color: ${darken(0.4, '#D7D7D7')};
    }

    img{
        width: 20px;
        height: 20px;
    }

    span{
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text);
    }
`;