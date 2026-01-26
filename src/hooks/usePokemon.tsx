import { useEffect, useState } from "react";

interface Pokemon {
    id: number;
    name: string;
    imageUrl:string;
}
interface Props {
    id: number;
}

const usePokemon = ({id}:Props) => {
   const [isloading, setIsloading] = useState(true);
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    
    const getPokemonById = async (id:number) => {
        setIsloading(true)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
       
        setPokemon({
            id: data.id,
            name: data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        });
        setIsloading(false);
    }

    useEffect(() => {
        getPokemonById(id);
    }, [id]);
    
    return {
        isloading,
        pokemon,
        formatterid:id.toString().padStart(3,'0'),
  }
}

export default usePokemon
