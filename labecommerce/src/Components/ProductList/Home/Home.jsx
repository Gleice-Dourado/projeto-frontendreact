import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { HomePage, CardsArea, HeaderHome } from "./HomeStyle";

export function Home({ productList }) {


    return (
        <HomePage>

            <HeaderHome>
                <p>Quantidade de produtos: {productList.length}</p>

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
                <ProductCard
                    name={productList[0].name}
                    image={productList[0].imageUrl}
                    value={productList[0].value} />
                <ProductCard name={productList[1].name}
                    image={productList[1].imageUrl}
                    value={productList[1].value} />
                <ProductCard name={productList[2].name}
                    image={productList[2].imageUrl}
                    value={productList[2].value} />
                <ProductCard name={productList[3].name}
                    image={productList[3].imageUrl}
                    value={productList[3].value} />
                <ProductCard name={productList[4].name}
                    image={productList[4].imageUrl}
                    value={productList[4].value} />
                <ProductCard name={productList[5].name}
                    image={productList[5].imageUrl}
                    value={productList[5].value} />
                <ProductCard name={productList[6].name}
                    image={productList[6].imageUrl}
                    value={productList[6].value} />
                <ProductCard name={productList[7].name}
                    image={productList[7].imageUrl}
                    value={productList[7].value} />
                <ProductCard name={productList[8].name}
                    image={productList[8].imageUrl}
                    value={productList[8].value} />
                <ProductCard name={productList[9].name}
                    image={productList[9].imageUrl}
                    value={productList[9].value} />
                <ProductCard name={productList[10].name}
                    image={productList[10].imageUrl}
                    value={productList[10].value} />
                <ProductCard name={productList[11].name}
                    image={productList[11].imageUrl}
                    value={productList[11].value} />

            </CardsArea>

        </HomePage>
    )
}
