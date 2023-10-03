import { Link } from "react-router-dom";
import { CardContainer } from "./styled";

interface CardProps {
  toLink?: string;
  img?: string;
  pokemonId?: string;
  name?: string;
  hp?: number;
  attack?: number;
  defense?: number;
}

const Component = (props: CardProps) => {
  const { toLink, img, pokemonId, name, hp, attack, defense } = props;
  return (
    <CardContainer className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{pokemonId}</p>
        {hp ? (
          <>
            <div>hp: {hp}</div>
            <div>Attack: {attack}</div>
            <div>Defense: {defense}</div>
          </>
        ) : (
          <Link to={`/pokemons/${toLink}`} className="btn btn-primary">
            More information
          </Link>
        )}
      </div>
    </CardContainer>
  );
};

export { Component as Card };
export default Component;
