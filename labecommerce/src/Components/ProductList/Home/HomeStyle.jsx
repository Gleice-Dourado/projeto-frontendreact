import styled from "styled-components";

export const HomePage = styled.section`
   flex-basis:60%;
   display:flex;
   flex-direction:column;
`
export const HeaderHome = styled.div`
    height:8vh;
    display:flex;
    justify-content: space-between;
    padding: 3% 2% 2% 2%;
    color:white
`

export const CardsArea = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap: 1vw;
    padding:1% 1% 1% 1.5%;
    height:92%;
    width:100%;
    overflow-y:auto;
    /* border: 5px solid yellow; */
`

