import { pokemonApi } from "../../api/pokemonApi";
import { setCurrentPokemon, setPokemons, startLoadingPokemons } from "./pokemonsSlice";


export const getPokemons = (page = 1 ) => {
    return async(dispatch: any) => {
        dispatch(startLoadingPokemons());
        
        console.log('getPokemons');
        //TODO: realizar petición http
        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10}`);
        // const data = await response.json();
        // console.log(data);
        const offset = (page - 1) * 20;

        const { data } = await pokemonApi.get(`/pokemon?limit=20&offset=${ offset }`);


        dispatch (setPokemons({
            pokemons: data.results,page: page, 
        }));

      
    }
}

export const getPokemon = (name: string) => {
    return async(dispatch: any) => {
        dispatch(startLoadingPokemons());
        console.log('hola',name);
        const { data } = await pokemonApi.get(`/pokemon/${name}`);
        console.log(data);

        const pokemon = {
            name: data.name,
            id: data.id,
            img: data.sprites.front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
          };

          dispatch(setCurrentPokemon({
            pokemon
          }));
    }
}