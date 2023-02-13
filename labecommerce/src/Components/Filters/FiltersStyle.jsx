import styled from "styled-components"

export const BoxFilter = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    gap: 5%;
    flex-basis:20%;
   /*  height:80%; */
    background-color:yellow;
    padding: 0 1% 0 1%;

    h2{
        margin-top:5%
    }
`
export const ValorMinimo = styled.div`


    input{
        width:70% 
    }
    
`;

export const ValorMaximo = styled.div`
       
    input{
        width:70% 
    }
    
`;

export const BuscaPorNome = styled.div`
    
    input{
        width:70% 
    }
    
`;