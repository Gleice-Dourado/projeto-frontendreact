import React from "react";
import { ItemsContainer, ImageProduct, NameProduct, InfoProduct, DeleteSharp, Info } from "./ItemsStyle";

export function Items({ item, removeCartItem }) {

    return (
        <ItemsContainer>
            <ImageProduct src={item.imageUrl} alt="" />
            <Info>
            <NameProduct>{item.name}</NameProduct>
            <p>{`R$ ${(item.value).toFixed(2).replace('.', ',')}`}</p>
            </Info>
            <InfoProduct>
                <div>
                <p>Quantidade: {item.quantity}</p></div>
                <button onClick={() =>
                    removeCartItem(item)}> <DeleteSharp/></button>
            </InfoProduct>
        </ItemsContainer>
    )
}