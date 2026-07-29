import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Intro = styled.p`
  font-family: "Nunito";
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.55;
  max-width: 42rem;
  padding: 0 clamp(1rem, 3vw, 2.75rem);
  margin: 0 auto clamp(3rem, 2.4rem + 1.2vw, 4.25rem) auto;

  @media (min-width: 1024px) {
    padding-left: clamp(3.5rem, 6vw, 7rem);
    padding-right: clamp(3.5rem, 6vw, 7rem);
  }
`;

export const SvgLogoContainer = styled.div`
  height: 4em;
  width: 4em;
  display: block;
  position: relative;
`;
