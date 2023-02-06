import styled from "styled-components";


export const Container = styled.div`
display:grid;
grid-template-columns: repeat(3, 1fr);
gap:2rem ;
margin-top: -10rem;

div {
    background-color: var(--shape);
    padding: 0.5rem 2rem;
    border-radius: 0.25rem ;
    color: var(--text-title);

    header {
        display:flex;
        align-items:center;
        justify-content:space-between;
        img{
           height: 50px ;
        }
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 2rem ;
    }

    &.highlight-background{
        background-color: var(--green);
    }
}
`;

