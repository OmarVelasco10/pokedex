import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../../components";
import { Button, CardContainer, Main } from "./styled";
import { PokemonDetails } from "../../types/types";
import { useEffect, useState } from "react";
import { fetchPokemon } from "../../api/fetchPokemon";
import { Loading } from "../../components/Loading";
import { waitFor } from "../../helpers/waitFor";
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getPokemon } from '../../store/pokemons';

const Component = () => {
    // const [isLoading, setIsLoading] = useState(false);
  // const [pokemon, setPokemon] = useState<PokemonDetails>();
  const { name } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { isLoading, pokemon, page } = useAppSelector(
    (state) => state.pokemons
  );

  useEffect(() => {
    // async function getPokemon() {
    //     setIsLoading(true);
    //     await waitFor(500);
    //   const fetchedPokemon = await fetchPokemon(name as string);
    //   setPokemon(fetchedPokemon);
    //   setIsLoading(false);
    // }

    // getPokemon();
    console.log(pokemon);
    if(!pokemon?.name || pokemon.name !== name){
      console.log('entrando');
      if(name) {
        dispatch(getPokemon(name));
      }
    }
   

  }, [name]);

  if(isLoading || !pokemon) return <Loading />

  return (
    <>
      <Button className="btn btn-warning" onClick={() => navigate(-1)}>Go Back</Button>
      <CardContainer>
        <Main>
          <Card
            name={pokemon?.name}
            img={pokemon?.img}
            pokemonId={pokemon?.id}
            hp={pokemon?.hp}
            attack={pokemon?.attack}
            defense={pokemon?.defense}
          />
        </Main>
      </CardContainer>
    </>
  );
};

export { Component as Pokemon };
export default Component;
