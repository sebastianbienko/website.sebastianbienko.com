import Image from "next/image";
import styled from "styled-components";

export const Root = styled.div`
  margin-top: 2rem;

  > h2 {
    opacity: 0.25;
    font-family: "Nunito";
    font-weight: 600;
    font-size: 1.25rem;
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
  opacity: 0.5;
  margin-top: 2rem;
`;

export const ReferenceImageContainer = styled.div`
  filter: grayscale(100%);
  display: block;
  padding: 3rem;
  margin: 0 2rem;
`;

export const ReferenceImage = styled(Image)``;
