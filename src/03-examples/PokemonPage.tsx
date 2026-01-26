import { useCounter } from "../hooks/useCounter";
import usePokemon from "../hooks/usePokemon";


export const PokemonPage = () => {
    const { count, increment, decrement } = useCounter(1);
    const { pokemon,isloading,formatterid } = usePokemon({ id: count });

    if (isloading) {
        return <div className="bg-gradient flex flex-col items-center">
            <h1 className="text-2xl font-thin text-white">Cargando...</h1>
        </div>
    }
    if(!pokemon) return <div> No hay pokemon </div>

  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">#{formatterid} {pokemon.name}</h3>
      <img
        src={pokemon.imageUrl}
        alt=""
      />

      <div className="flex gap-2">
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={decrement}>
          Anterior
        </button>
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={increment}>
          Siguiente
        </button>
       
      </div>
    </div>
  );
};