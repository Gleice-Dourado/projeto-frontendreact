import React from "react";
import { productList } from "../../../assets/productList";
import { Image, CardProduct, ProductInfo, BtnAddCart } from "./ProductCardStyle";

export function ProductCard(props) {

    const {name, image, value, product, addCart} = props

    return (
        <CardProduct>
            <Image>
                <img src={image} alt={name} />
            </Image>
            <ProductInfo>
                <p>{name}</p>
                <p>Valor:{`R$ ${(value).toFixed(2).replace('.', ',')}`}</p>
                <BtnAddCart>
                    <button onClick={() => addCart(product)} >Adicionar ao Carrinho</button>
                </BtnAddCart>
            </ProductInfo>
        </CardProduct>
    )
}

