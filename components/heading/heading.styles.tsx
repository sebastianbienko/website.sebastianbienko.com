import styled from "styled-components";
import { HeadingProps } from "./heading.models";

export const H1 = styled.h1<HeadingProps>`
  font-family: "Nunito";
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  letter-spacing: 0.01rem;
  font-weight: "bold";
`;

export const H2 = styled.h2<HeadingProps>`
  font-family: "Nunito";
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
  margin-top: 2.4rem;
  letter-spacing: 0.01rem;
  font-weight: "bold";
`;

export const H3 = styled.h3<HeadingProps>`
  font-family: "Nunito";
  font-size: 1rem;
  margin-bottom: 1.2rem;
  margin-top: 2.4rem;
  letter-spacing: 0.01rem;
  font-weight: "bold";
`;
