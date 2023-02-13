import styled from "styled-components";

export const HomePage = styled.section`
    flex-basis:60%;
    border:1px solid black;
`
export const HeaderHome = styled.div`
    height:15%;
    display:flex;
    justify-content: space-between;
    padding: 3% 2% 2% 2%;
`

export const CardsArea = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap: 2%;
    padding: 0 2% 2% 2%;
    height:85%;
`

