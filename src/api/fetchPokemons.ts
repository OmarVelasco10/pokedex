// https://unpkg.com/pokemons@1.1.0/pokemons.json

import { formatPokemonName } from "../helpers/formatPokemonName";
import { Pokemon } from "../types/types";

export async function fetchPokemons(): Promise<Pokemon[]>{
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    if(!response.ok) {
        throw new Error("Filed to fetch pokemons");
    }

    const results = await response.json();
    console.log(results);

    const pokemons = results.results.map((pokemon: any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        img: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(pokemon.name.toLowerCase())}.gif`
    }));

    const uniquePokemons = pokemons.filter(
        (pokemon: any, index: number) => pokemons.findIndex((other: any) => other.id === pokemon.id) === index
    );

    return uniquePokemons;
}