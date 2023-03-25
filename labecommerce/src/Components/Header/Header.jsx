import React from "react";
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
// import espacoImg from '/img/espaco.png'
import logoPlanet from '/img/orbita.png'

import { HeaderContainer, Menu, BuscaPorNome, Logo, ShoppingCart, Search } from "./HeaderStyle";

export function Header(props) {

    const { searchFilter, setSearchFilter, toggleCart} = props


    return (
        <HeaderContainer>

            <Logo>
                <img src={logoPlanet
                } alt="" />
                <h1><a href="#">Space T-shirts</a></h1>
            </Logo>

            <BuscaPorNome htmlFor="busca-por-nome">

                <Search />
                <input type={"text"}
                    id={"busca-por-nome"}
                    placeholder={'Busque seu produto'}
                    value={searchFilter} onChange={e => setSearchFilter(e.target.value)} />

            </BuscaPorNome>

            <Menu>
                <button onClick={toggleCart}>Carrinho<ShoppingCart /></button> 
            </Menu>
        </HeaderContainer>
    )

}

