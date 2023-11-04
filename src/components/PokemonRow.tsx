import { PokemonData } from "../lib/pokemon-data";


export function PokemonRow({ name, types, sprite }: Partial<PokemonData>) {
    return (
        <div className="flex gap-3 text-2xl my-5">
            <p className="font-semibold">{name}</p>
            {types?.map((type) => (
                <p>{type}</p>
            ))}
            <img src={sprite} />
        </div>
    )
}
