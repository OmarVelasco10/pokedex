import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../../components";
import { Button, Main } from "./styled";
import { PokemonDetails } from "../../types/types";
import { useEffect, useState } from "react";
import { fetchPokemon } from "../../api/fetchPokemon";
import { Loading } from "../../components/Loading";
import { waitFor } from "../../helpers/waitFor";

const Component = () => {
    const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
        setIsLoading(true);
        await waitFor(500);
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
      setIsLoading(false);
    }

    getPokemon();
  }, [name]);

  if(isLoading || !pokemon) return <Loading />

  return (
    <>
      <Button className="btn btn-warning" onClick={() => navigate(-1)}>Go Back</Button>
      <div>
        <Main>
          <Card
            name={pokemon?.name.toUpperCase()}
            img={pokemon?.img}
            pokemonId={pokemon?.id}
            hp={pokemon?.hp}
            attack={pokemon?.attack}
            defense={pokemon?.defense}
          />
        </Main>
      </div>
    </>
  );
};

export { Component as Pokemon };
export default Component;
