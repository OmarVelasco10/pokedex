import { useEffect, useState } from "react";
import { Header, Footer, Card } from "../../components";
import { Main } from "./styled";
import { Pokemon } from "../../types/types";
import { Loading } from "../../components/Loading";
import { fetchPokemons } from "../../api/fetchPokemons";
import { waitFor } from "../../helpers/waitFor";

const Component = () => {
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchAllPokemons = async () => {
        setIsLoading(true);
        await waitFor(1000);
        const allPokemons: Pokemon[] = await fetchPokemons();
        setPokemons(allPokemons);
        setIsLoading(false);
      }

      fetchAllPokemons();
    }, []);

    if(isLoading || !pokemons) {
        return <Loading />
    }

    const filteredPokemons = pokemons?.slice(0,151).filter((pokemon) => {
        return pokemon.name.toLocaleLowerCase().match(query.toLocaleLowerCase());
    });
    

	return (
		<>
        <Header query={query} setQuery={setQuery}/>
        <Main>
            {
                filteredPokemons?.slice(0,151).map((pokemon: Pokemon) => (
                    <Card key={pokemon.id} 
                    toLink={pokemon.name.toLocaleLowerCase()} 
                    img={pokemon.img}
                    pokemonId={pokemon.id}
                    name={pokemon.name}
                    />
                ))
            }

        </Main>
        <Footer />
        </>
	);
};

export { Component as Pokemons };
export default Component;
