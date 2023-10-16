import React from 'react';
import { Link } from "react-router-dom";
import { CardContainer, Name } from "./styled";

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
    <CardContainer className="card  border-info">
      {
        img &&   <img src={img} className="card-img-top" alt={name} />
      }
    
      <div className="card-body">
        <Name className="card-title">{name?.toUpperCase()}</Name>
        {
          pokemonId &&  <p className="card-subtitle mb-2 text-body-secondary">ID: {pokemonId}</p>
        }
       
        {hp ? (
          <>
            <p className='card-text'>hp: {hp}</p>
            <p className='card-text'>Attack: {attack}</p>
            <p className='card-text'>Defense: {defense}</p>
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
