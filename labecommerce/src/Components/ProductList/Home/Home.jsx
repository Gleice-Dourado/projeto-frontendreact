import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { HomePage, CardsArea, HeaderHome } from "./HomeStyle";

export function Home(props) {
    
    const { filteredProducts, amount, setAmount, cart, setCart } = props

    const [ordination, setOrdination] = useState('')

    //função que adiciona um item ao carrinho
    const addCart = (productItem) => {
       
        const existingItem = cart.find((cartItem) => cartItem.id === productItem.id) 
      
        !existingItem ?
            
            setCart([...cart, { ...productItem, quantity: 1 }])
            : 
            setCart(cart.map((cartItem) => cartItem.id === productItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
    }

    //função que calcula o valor total e atualiza o estado
    const calcTotal = () => {
        const totalValue = cart.reduce((total, item) => total + (item.value * item.quantity), 0).toFixed(2)
        setAmount(`R$ ${totalValue.replace('.', ',')}`);
    }

    useEffect(() => {
        calcTotal()
    }, [cart])

    return (
        <HomePage>

            <HeaderHome>
                <p>Quantidade de produtos: {filteredProducts.length}</p>

                <div>
                    <label htmlFor="crescente-decrescente">
                        Ordenar por preço:
                    </label>
                    <select id="crescente-decrescente" name="crescente-decrescente" onChange={e => setOrdination(e.target.value)}>
                        <option value="">Nenhum</option>
                        <option value="decrescente">Maior</option>
                        <option value="crescente">Menor</option>
                    </select>
                </div>
            </HeaderHome>
            <CardsArea>
                {filteredProducts.sort((a, b) => {
                    if (ordination === 'crescente') {
                        return a.value - b.value
                    } else if (ordination === 'decrescente') {
                        return b.value - a.value
                    }

                }).map((product) => (

                    <ProductCard key={product.id}
                        id={product.id}
                        image={product.imageUrl}
                        name={product.name}
                        value={product.value}
                        product={product} //do map
                        addCart={addCart}
                    />))
                }
            </CardsArea>

        </HomePage>
    )
}
