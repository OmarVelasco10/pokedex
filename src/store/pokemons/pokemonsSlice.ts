import { createSlice } from '@reduxjs/toolkit';
import { PokemonDetails } from '../../types/types';

interface PokemonState {
    page: number;
    pokemons: Pokemon[];
    pokemon: PokemonDetails | null;
    isLoading: boolean;
}

type Pokemon = {
    name: string;
    url: string
}

const initialState: PokemonState = {
    page: 0,
    pokemons: [],
    pokemon: null,
    isLoading: false
}

export const PokemonsSlice = createSlice({
    name: 'pokemonsSlice',
    initialState,
    reducers: {
        startLoadingPokemons: ( state ) => {
            state.isLoading = true;
        },
        setPokemons: (state, {payload}) => {
            state.isLoading = false;
            state.page = payload.page;
            state.pokemons = payload.pokemons
            console.log(payload);
        },
        setCurrentPokemon: (state, {payload}) => {
            state.isLoading = false;
            state.pokemon = payload.pokemon
        }
    }
});



export const { setPokemons, startLoadingPokemons, setCurrentPokemon } = PokemonsSlice.actions;