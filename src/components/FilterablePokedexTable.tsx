import { useState } from "react";
import { PokemonTypeSelection } from "./PokemonTypeSelection";
import { PokedexTable } from "./PokedexTable";


export function FilterablePokedexTable() {
    const [type, setType] = useState<string | undefined>("all")

    return (
        <section>
            <PokemonTypeSelection selectedType={type} selectType={setType} />
            <PokedexTable type={type} />
        </section>
    )
}
