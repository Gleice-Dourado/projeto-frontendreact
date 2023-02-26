import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:'Times New Roman', Times, serif
    }`

export const Container = styled.div`
    display:flex;
    flex-direction: column;

`

export const ContainerLoja = styled.main`
    display:flex;
    width:100%;
    height:100%;

/* border:5px solid red; */
`

