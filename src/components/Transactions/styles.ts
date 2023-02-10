import styled from "styled-components";

export const Container = styled.div`
    margin-top:4rem;


    table {
        width:100%;
        border-spacing : 0 0.5rem;
    }

    th{
        color: var(--text-body);
        font-weight:400;
        padding:1rem 2rem ;
        text-align:left;
        line-height:1.5rem;
    }

    td{
        padding:1rem 2rem;
        border:0;
        background-color: rgb(51 205 149 / 0.1);
        color:var(--text-body);
        border-radius:0.25rem ;

        &:first-child{
            color:black;
        }

        &.deposit {
            color:green;
        }
        &.withdraw {
            color:red;
        }

    }
`;