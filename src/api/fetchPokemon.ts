// https://pokeapi.co/api/v2/pokemon/ditto

import { formatPokemonName } from "../helpers/formatPokemonName";
import { PokemonDetails } from "../types/types";

export async function fetchPokemon(name: string): Promise<PokemonDetails> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${formatPokemonName(name)}`
  );

  if (!response.ok) {
    throw new Error(`Error Fetching ${name}`);
  }

  const result = await response.json();
  const pokemon = {
    name: result.name,
    id: result.id,
    img: result.sprites.front_default,
    hp: result.stats[0].base_stat,
    attack: result.stats[1].base_stat,
    defense: result.stats[2].base_stat,
  };

  return pokemon;
}
