import styled from "styled-components";
import TypedWrapper from "../typed-wrapper/typed-wrapper";
import Image from "next/image";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: "Nunito";
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1.2rem;
  letter-spacing: 0.01rem;
  font-weight: 300;

  @media screen and (min-width: 75rem) {
    flex-direction: row;
  }
`;

export const ElementContainerBase = styled.div`
  width: 100%;
  min-height: 5rem;

  @media screen and (min-width: 75rem) {
    width: 50%;
  }
`;

export const ImageContainer = styled(ElementContainerBase)`
  margin-bottom: 2rem;
  @media screen and (min-width: 75rem) {
    margin-bottom: 0;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TextContainer = styled(ElementContainerBase)`
  margin: auto;
  text-align: center;
`;

export const ProfileImage = styled(Image)`
  width: 100%;
  max-width: 30rem !important;
`;

export const Text = styled.p`
  text-align: center;
  font-family: "Nunito";
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1.2rem;
  letter-spacing: 0.01rem;
  font-weight: 200;
`;

export const Typewriter = styled(TypedWrapper)`
  @media screen and (min-width: 75rem) {
    margin-top: 0;
  }

  span {
    white-space: pre;
  }

  strong {
    font-weight: 900;
  }
`;
