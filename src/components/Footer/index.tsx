import { Footer, FooterLink, Span } from "./styled";

const Component = () => {
  return (
    <Footer>
        <FooterLink to="/pokemons">Pokemons</FooterLink>
        <Span>2023</Span>
        <Span>Omar Velasco</Span>

    </Footer>
  );
};

export { Component as Footer };
export default Component;
