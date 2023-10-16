import React from "react";
import { useEffect, useState } from "react";
import { Header, Footer, Card } from "../../components";
import { ButtonsContainer, ContentContainer, Main } from "./styled";
import { Pokemon } from "../../types/types";
import { Loading } from "../../components/Loading";
import { fetchPokemons } from "../../api/fetchPokemons";
import { waitFor } from "../../helpers/waitFor";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getPokemons } from "../../store/pokemons";
import { useAppSelector } from "../../hooks/useAppSelector";

const Component = () => {
  const [query, setQuery] = useState("");
  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  // const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const { isLoading, pokemons, page } = useAppSelector(
    (state) => state.pokemons
  );

  useEffect(() => {
    //   const fetchAllPokemons = async () => {
    //     setIsLoading(true);
    //     await waitFor(1000);
    //     const allPokemons: Pokemon[] = await fetchPokemons();
    //     setPokemons(allPokemons);
    //     setIsLoading(false);
    //   }

    //   fetchAllPokemons();

    if (pokemons[0] === undefined) {
      dispatch(getPokemons());
    }
  }, []);

  if (isLoading || !pokemons) {
    return <Loading />;
  }

  const filteredPokemons = pokemons?.filter((pokemon) => {
    return pokemon.name.toLocaleLowerCase().match(query.toLocaleLowerCase());
  });

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <ContentContainer>
        <Main>
          {filteredPokemons?.map((pokemon: any, index) => (
            <Card
              key={`${pokemon.name}-${index}`}
              toLink={pokemon.name.toLocaleLowerCase()}
              img={pokemon.img}
              pokemonId={pokemon.id}
              name={pokemon.name}
            />
          ))}
        </Main>
        <ButtonsContainer>
          <button
            className="btn btn-warning"
            disabled={isLoading || page === 1}
            onClick={() => dispatch(getPokemons(page - 1))}
          >
            Prev
          </button>
          <button
            className="btn btn-success"
            disabled={isLoading}
            onClick={() => dispatch(getPokemons(page + 1))}
          >
            Next
          </button>
        </ButtonsContainer>

      </ContentContainer>

      <Footer />
    </>
  );
};

export { Component as Pokemons };
export default Component;
