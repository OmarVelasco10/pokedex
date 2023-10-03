import pokemmon from "../../assets/pokeball-removebg-preview.png";
import { LoadingContainer, LoadingImg } from "./styled";

const Component = () => {
  return (
    <LoadingContainer>
      <LoadingImg src={pokemmon} alt="pokemon" />
    </LoadingContainer>
  );
};

export { Component as Loading };
export default Component;
