import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  text-align: center;
`;

export const Email = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.8rem;
  font-family: "Nunito";
  font-weight: 200;

  @media screen and (min-width: 500px) {
    font-size: 2.4rem;
  }
`;
