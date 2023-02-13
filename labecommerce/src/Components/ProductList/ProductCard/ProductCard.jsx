import React from "react";
import { Image, CardProduct, ProductInfo, BtnAddCart } from "./ProductCardStyle";

export function ProductCard() {
    return (
        <CardProduct>
            <Image>
                <p>ProductCard</p>
            </Image>
            <ProductInfo>
                <p>Nome  do Produto</p>
                <p>Valor</p>
                <BtnAddCart>
                    <button>Adicionar ao Carrinho</button>
                </BtnAddCart>
            </ProductInfo>
        </CardProduct>
    )
}

