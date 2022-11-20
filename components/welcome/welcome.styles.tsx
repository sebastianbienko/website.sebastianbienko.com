import styled from "styled-components";
import TypedWrapper from "../typed-wrapper/typed-wrapper";
import Image from "next/image";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  max-width: 25rem;
  @media screen and (min-width: 75rem) {
    margin-bottom: 0;
  }
`;

export const TextContainer = styled(ElementContainerBase)`
  margin: auto;
  text-align: center;
`;

export const ProfileImage = styled(Image)`
  width: 100%;
  max-width: 35rem;
`;

export const Text = styled.p`
  text-align: center;
`;

export const Typewriter = styled(TypedWrapper)`
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.3rem;
  color: black;
  min-height: 3rem;
  margin-top: 2rem;
  overflow-wrap: break-word;

  @media screen and (min-width: 360px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 400px) {
    font-size: 1.15rem;
  }

  @media screen and (min-width: 75rem) {
    margin-top: 0;
  }

  span {
    white-space: pre;
  }

  strong {
    font-weight: 800;
  }
`;
