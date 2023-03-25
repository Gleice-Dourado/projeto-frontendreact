import React from "react";
import { Items } from "../Items/Items";
import { BoxCart } from "./CartStyle";

export function Cart(props) {

    const { amount, setAmount, cart, setCart } = props


    const removeCartItem = (productItem) => {
        //descobre o indice dos items no carrinho
        const indexItemToRemove = cart.findIndex((cartItem) => cartItem.id === productItem.id)

        //se o indice for diferente de -1 significa que ele existe
        if (indexItemToRemove !== -1) {

            const newCart = [...cart];
            const itemToRemove = newCart[indexItemToRemove]

            itemToRemove.quantity === 1 ?
                newCart.splice(indexItemToRemove, 1)
                :
                newCart[indexItemToRemove] = { ...itemToRemove, quantity: itemToRemove.quantity - 1 }


            setCart(newCart)
            setAmount(amount - itemToRemove) //atualiza o valor total(boa prática)
        }
    }


    return (
        <BoxCart>
            <h2>Carrinho</h2>

            <p> Valor total:{amount}</p>
            {/* MAP que renderiza os itens adicionados ao carrinho */}
            {cart.map((item) =>
                <Items key={item.id}
                    item={item}
                    removeCartItem={removeCartItem}
                    cart={cart} />
            )
            }
        </BoxCart>
    )
}