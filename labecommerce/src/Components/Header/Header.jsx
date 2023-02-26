import React from "react";
import logo from '../../assets/logo.png'

import { Logo, HeaderContainer, Menu } from "./HeaderStyle";

export function Header (){
    return(
        <HeaderContainer>
            <Logo src={logo} alt="logo"/>
            <Menu>
                <a href="#">Home</a>
                <a href="#">Sobre Nós</a>
                <a href="#">etc</a>
                <a href="#">etc</a>
            </Menu>
        </HeaderContainer>
    )

}

