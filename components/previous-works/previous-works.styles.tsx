import styled from "styled-components";
import { PreviousWorksProps, RowProps } from "./previous-works.models";

export const Root = styled.div<PreviousWorksProps>`
  font-family: "Nunito";
  font-size: 1rem;
  line-height: 1.4rem;
  margin-bottom: 1.2rem;
  letter-spacing: 0.01rem;
  font-weight: 400;
  display: inline-block;
  text-align: left;
  width: 80vw;
  max-width: 30rem;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 50rem) {
    display: block;
  }
`;

export const Dates = styled.span`
  margin-left: -3.5rem;
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  gap: 0.2rem;

  > div {
    display: inline-block;
  }

  > div:first-child:before {
    font-weight: 400;
    content: "from ";
    font-size: 0.8rem;
  }

  > div:last-child:before {
    font-weight: 400;
    content: "till ";
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 50rem) {
    margin-left: -0.75rem;
    margin-bottom: 0.1rem;
    width: 100%;
    justify-content: flex-start;
  }
`;

export const Client = styled.span`
  font-weight: 800;

  @media only screen and (max-width: 50rem) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  > div {
    &:before {
      font-weight: 400;
      content: "for ";
      font-size: 0.8rem;
    }
  }
`;

export const Roles = styled.span`
  font-weight: 400;

  &:before {
    font-weight: 400;
    content: "as ";
    font-size: 0.8rem;
  }
`;

export const Description = styled.div`
  margin-top: 2rem;
  width: 80vw;
  max-width: 30rem;

  @media only screen and (max-width: 50rem) {
    margin-top: 1.7rem;
  }
`;

export const Entry = styled.div`
  margin-bottom: 4rem;
`;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.rightOriented ? "flex-end" : "space-between"};
`;
