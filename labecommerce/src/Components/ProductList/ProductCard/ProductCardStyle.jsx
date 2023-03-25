import styled from "styled-components";

export const CardProduct = styled.section`

    background-color:var(--dark-purple);
    display:flex;
    flex-direction:column;
    width:18vw;
    height:60vh;
    border-radius:2vh;
    color: white;
    padding: 8%;
    gap:2%;
`

export const Image = styled.div`

    height:80%;

    img{
        width:100%;
        height:100%;
        border-radius:2%;
    }
  
`
export const ProductInfo = styled.div`

    height:20%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    gap:5%;
    padding:2%;
    color:var(--light-grey)
`
export const BtnAddCart = styled.div`

    button{
        height:3vh;
        border-radius:2vh
    }
`