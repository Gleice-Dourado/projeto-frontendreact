import React from "react";
import { BoxFilter, ValorMinimo, ValorMaximo } from "./FiltersStyle";



export function Filters(props) {

    const { minFilter, setMinFilter, maxFilter, setMaxFilter } = props


    return (
        <BoxFilter>
            <h2>Filtrar por:</h2>
            <h3>Preço</h3>
            <ValorMinimo>
                <label htmlFor="valor-minimo">Valor mínimo:</label>
                <input type={"number"}
                    id={"valor-minimo"} min={0} value={minFilter} onChange={e => setMinFilter(e.target.value)} />
            </ValorMinimo>

            <ValorMaximo>
                <label htmlFor="valor-maximo">Valor máximo:</label>
                <input type={"number"}
                    id={"valor-maximo"} min={0} value={maxFilter} onChange={e => setMaxFilter(e.target.value)} />
            </ValorMaximo>

        
        </BoxFilter >
    )
}
