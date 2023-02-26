import styled from "styled-components"

export const BoxFilter = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    gap: 2%;
    flex-basis:20%;
   /*  height:80%; */
    background-color:#01010d;
    color: #f1d6dd;
    background-image: url(/stars.jpg);
    background-position:center ;
    background-repeat: round;

    background-size:contain;
    border: 1px white;

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

export const MoonIMG = styled.img`
    width:30%;

    border: 2 px solid red
`