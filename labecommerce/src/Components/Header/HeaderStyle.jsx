import styled from "styled-components";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';



export const HeaderContainer = styled.header`
display:flex;
justify-content:space-between;
align-items:center;
height:15vh;
padding:1%;
background-color:#1d1f3f;


`
export const Logo = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:30%;
height:100%;
margin-left:2%;

img{
    margin-right:2%;
    width:20%;
    height:100%;
    color:var(--white)
}
a{
    text-decoration:none;
    color:var(--white);
}
`


export const Search = styled(SearchSharpIcon)`

color:var(--dark-blue);
flex-basis:10%;

`

export const BuscaPorNome = styled.label`

    width:30vw;
    height:6vh;
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color:var(--light-grey);
    border:var(--light-grey);
    border-radius:1rem;

    &:focus-within{
        box-shadow: 0 0 0 2px var(--light-pink);
    }

    input{
        flex-basis:90%;
        height:100%;
        border-radius:1rem;
    }
  

 
`;

export const Menu = styled.nav`
display:flex;

margin-right:3%;


button{
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration: none;
    background-color:transparent;
    border:none;
    color:var(--white) ;
  
    &:hover{
        cursor:pointer;
        background-color:var(--dark-purple)
    }
}
`
export const ShoppingCart = styled(ShoppingCartSharpIcon)`

color:var(--white)
`

