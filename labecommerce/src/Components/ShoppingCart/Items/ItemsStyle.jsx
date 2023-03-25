import styled from "styled-components";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

export const DeleteSharp = styled(DeleteSharpIcon)`
`

export const ItemsContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    justify-content:flex-start;
    align-items:center;
    gap:1rem;
    border-bottom:1px solid white;
    
`
export const Info = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`

export const InfoProduct= styled.div`

    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;

    width:100%;

    button{
        width:2vw;
        height:2vh
    }

`

export const ImageProduct = styled.img`

    width:6vw;
    border-radius:2%;

`

export const NameProduct =  styled.p`

font-size:0.8rem;
`