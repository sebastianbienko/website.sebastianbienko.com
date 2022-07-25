import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  text-align: center;
`;

export const Email = styled.a`
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-family: "Wire One";
  letter-spacing: 0.12rem;
  font-weight: 900;

  @media screen and (min-width: 500px) {
    font-size: 2.6rem;
  }
`;
