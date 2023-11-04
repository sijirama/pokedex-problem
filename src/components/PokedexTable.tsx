import { pokemonArray } from "../lib/pokemon-data"
import { PokemonRow } from "./PokemonRow"

type Props = {
    type: string | undefined
}

export function PokedexTable({ type }: Props) {

    const newPokemonArray = pokemonArray.filter((pokemon) => {
        if (type === "all") {
            return pokemonArray
        }
        return pokemon.types.includes(type!)
    })

    return (
        <>
            {newPokemonArray.map(pokemon => (
                <PokemonRow key={pokemon.id} name={pokemon.name} types={pokemon.types} sprite={pokemon.sprite} />
            ))}
        </>
    )
}

