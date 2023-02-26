import styled from "styled-components";

export const CardProduct = styled.section`
    background-image:url('https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg');
    width:18vw;
    height:60vh;
    border-radius:2%;
    color: white;
    border:1px solid black;
`
export const Image = styled.div`
   
   /*  border: 1px solid black; */
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
    border:1px solid black;
    gap:5%;
    padding:2%

`
export const BtnAddCart = styled.div`
    /* border:1px solid black; */
    display: flex;
    justify-content: center;

    button{
        height:3vh;
    }
`