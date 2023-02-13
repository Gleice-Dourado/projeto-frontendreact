import React from "react";
import { Items } from "../Items/Items";
import { BoxCart } from "./CartStyle";

export function Cart () {
    return(
        <BoxCart>
            <h2>Cart</h2>
            <Items/>
            <p> Valor total:0</p>
            
        </BoxCart>
    )
}