import styled from "styled-components";

export const CardProduct = styled.section`
    background-color:blue;
`
export const Image = styled.div`
   /*  width: 20vw; */
    border: 1px solid black;
    height:80%;
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