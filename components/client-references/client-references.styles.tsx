import Image from "next/image";
import styled from "styled-components";

export const Root = styled.div`
  margin-top: 2rem;

  > h2 {
    opacity: 0.75;
    font-family: parisine-std-clair;
    font-weight: 400;
    font-size: 1.25rem;
    font-style: normal;
  }
`;

export const References = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

export const Reference = styled.div`
  min-width: 25%;
  display: inline-block;
  opacity: 0.65;
  margin-top: 2rem;
`;

export const ReferenceImageContainer = styled.div`
  filter: grayscale(100%);
  display: block;
  padding: 3rem;
  margin: 0 2rem;
  position: relative;
`;

export const ReferenceImage = styled(Image)``;
