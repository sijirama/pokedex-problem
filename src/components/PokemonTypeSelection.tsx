import { useState } from "react";

type PokemonTypeSelectionProps = {
    selectedType: string | undefined;
    selectType: (type: string | undefined) => void;
}


export function PokemonTypeSelection({ selectType, selectedType }: PokemonTypeSelectionProps) {

    const [value, setValue] = useState("")

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        selectType(value);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div>

            <p>The selected type is: {selectedType}</p>
            <form className="flex gap-2" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="value"
                    placeholder="Change Type"
                    value={value}
                    onChange={handleChange}
                />
                <button type="submit" className="bg-slate-500">Submit</button>
            </form>
        </div>

    )
}
