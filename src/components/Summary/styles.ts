import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;
    overflow: scroll;

    @media (max-width:625px){
        gap: 1rem;
        grid-template-columns: repeat(3, 90%);
    }
    div{
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--title);

        &:nth-child(3){
            background-color:var(--green);
            color: #FFF;
        }
        header{
            display: flex;
            justify-content :space-between;
            align-items: center;
        }
        strong{
            display:block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
        }
    }
`;