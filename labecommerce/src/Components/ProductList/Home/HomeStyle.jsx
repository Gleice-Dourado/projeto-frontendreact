import styled from "styled-components";

export const HomePage = styled.section`
    flex-basis:60%;
    height:300vh;
    width:100%;
    /* border:5px solid coral; */
    background-image:url(/orion-nebula.jpg);
 
    background-position:center
    
`
export const HeaderHome = styled.div`
    height:5%;
    display:flex;
    justify-content: space-between;
    padding: 3% 2% 2% 2%;
    color:white
`

export const CardsArea = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap: 1%;
    padding: 0 1% 0 1.5%;
    height:95%;
    width:100%;
/*     border: 5px solid yellow */
  
`

