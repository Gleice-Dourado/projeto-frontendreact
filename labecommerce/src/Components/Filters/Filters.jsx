import React from "react";
import { BoxFilter, ValorMinimo, ValorMaximo, BuscaPorNome, MoonIMG } from "./FiltersStyle";
import LusMetade from '../../assets/lua-metade.jpg'

export function Filters() {
    return (
        <BoxFilter>
            <h2>Filters</h2>
            <ValorMinimo>
                <label htmlFor="valor-minimo">Valor mínimo:</label>
                <input type={"number"} />
            </ValorMinimo>

            <ValorMaximo>
                <label htmlFor="valor-maximo">Valor máximo:</label>
                <input type={"number"} />
            </ValorMaximo>

            <BuscaPorNome>
                <label htmlFor="busca-por-nome">Busca por nome:</label>
                <input type={"text"} />
            </BuscaPorNome>
          {  <MoonIMG src={LusMetade} alt="Lua"/>}
        </BoxFilter >
    )
}
