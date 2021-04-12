import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    &>div{  
        display: none;
        @media screen and (max-width: 625px){
            display: flex;
            justify-content:space-between;
        }
    }
    table{
       width: 100%;
       border-spacing:  0 0.5rem;


       th{
           color: var(--text);
           font-weight: 400;
           padding: 1rem 2rem;
           text-align: left;
           line-height: 1.5rem;
       }

       td{
           padding: 1rem 2rem;
           border: 0;
           background-color: var(--shape);
           color: var(--text);
           border-radius: 0.25rem;

           &:first-child{
               color: var(--title)
           }

           &.deposit{
               color: var(--green);
           }

           &.withDraw{
               color: var(--red)
           }
       }
    }

    @media screen and (max-width: 625px){
        th{
            display: none;
        }
        tr{
            display:flex;
            flex-wrap: wrap;
            border-radius: 8rem 
        }
        td:nth-child(1){
            width: 100%;
        }
        td:nth-child(2){
            width: 100%;
        }
        td:nth-child(3), td:nth-child(4){
            width: 50%;
        }
    }
`;
export const divMobile = styled.div`
    
`
