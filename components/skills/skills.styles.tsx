import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Intro = styled.p`
  font-family: "Nunito";
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: 0.01rem;
  position: relative;
  max-width: 42rem;
  padding: 0 clamp(1rem, 3vw, 2.75rem) 0 clamp(2rem, 4.5vw, 4rem);
  margin: 0 auto clamp(4rem, 3.2rem + 1.8vw, 5.5rem) auto;

  &::before {
    content: "";
    position: absolute;
    left: clamp(1rem, 3vw, 2.75rem);
    top: 0;
    bottom: 0;
    width: 0.2rem;
    background: #000;
  }

  @media (min-width: 1024px) {
    padding-left: clamp(4.5rem, 7vw, 8rem);
    padding-right: clamp(3.5rem, 6vw, 7rem);

    &::before {
      left: clamp(3.5rem, 6vw, 7rem);
    }
  }
`;

export const SvgLogoContainer = styled.div`
  height: 4em;
  width: 4em;
  display: block;
  position: relative;
`;

export const Note = styled.p`
  font-family: "Nunito";
  font-size: 0.9rem;
  line-height: 1.4;
  font-weight: 300;
  letter-spacing: 0.01rem;
  margin: clamp(1.25rem, 1rem + 0.8vw, 2rem) auto 0 auto;
  padding: 0 clamp(1rem, 3vw, 2.75rem);
  max-width: 42rem;
`;
