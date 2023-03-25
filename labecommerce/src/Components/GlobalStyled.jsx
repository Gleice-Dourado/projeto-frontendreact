import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --dark-blue:#1d1f3f;
        --dark-purple:#3e2d4f;
        --light-pink:#ead3e3;
        --light-grey:#d4d4d4;
        --white:#ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1{
        font-family:'Bungee';
        font-weight:700;
    }

    h2{
        font-family:'Teko';
        font-size:2rem;
    }

    h3{
        font-family:'teko';
        font-size:1.5rem;
    }

    p{
        font-family:'rajdhani';
        font-weight:700;
    }

    label{
        font-family:'space-mono';
        font-weight:600;
        font-size:1.1rem;
      
    }

    input{
        background-color:var(--light-grey);
        border-style:none;
        box-shadow: none;
        outline:none;
    
    }

    button{
        background-color:var(--light-pink);
        color:var(--dark-blue);
        padding:2vh;
        display:flex;
        justify-content:center;
        align-items:center;

        &:hover{
            background-color:var(--dark-blue);
            color:var(--light-pink)

        }
    }

`

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    height:100vh;
    /* border:5px solid brown; */

`

export const ContainerLoja = styled.main`
    display:flex;
    width:100%;
    height:80%;
    background-image:url(/img/orion-nebula-1.jpg);
    background-position:center;
    background-size:100% 80%;

  
`

