import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { HomePage, CardsArea, HeaderHome } from "./HomeStyle";

export function Home() {
    return (
        <HomePage>

            <HeaderHome>
                <p>Quantidade de produtos: 2</p>

                <div>
                    <label>
                        Ordenação:
                    </label>
                    <select name="crescente-decrescente" >
                        <option value="Decrescente">Decrescente</option>
                        <option value="Crescente">Crescente</option>
                    </select>
                </div>
            </HeaderHome>
            <CardsArea>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </CardsArea>

        </HomePage>
    )
}
