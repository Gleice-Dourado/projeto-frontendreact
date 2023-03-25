import React from "react";
import { Image, CardProduct, ProductInfo, BtnAddCart } from "./ProductCardStyle";

export function ProductCard({name, image, value }) {
    //obrigatório o alt na img
    
    return (
        <CardProduct>
            <Image>
                <img src={image} alt={'primeira imagem'}/>
            </Image>
            <ProductInfo>
                <p>{name}</p>
                <p>Valor: R${value},99</p>
                <BtnAddCart>
                    <button>Adicionar ao Carrinho</button>
                </BtnAddCart>
            </ProductInfo>
        </CardProduct>
    )
}

