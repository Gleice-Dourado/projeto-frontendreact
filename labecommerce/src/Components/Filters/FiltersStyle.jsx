import styled from "styled-components"

export const BoxFilter = styled.section`

    display:flex;
    flex-direction:column;
    justify-content:center;
    gap: 10%; 
    margin-top:5%;
    margin-right:2%;
    padding:2%;
    flex-basis:20%;
    height:40%;
    color:var(--light-pink);

    h2{
        margin-top:5%
    }
`
export const ValorMinimo = styled.div`

    input{
        width:70%;
        height:70%;
    }
    
`;

export const ValorMaximo = styled.div`
       
    input{
        width:70%;
        height:70%
    }
    
`;


