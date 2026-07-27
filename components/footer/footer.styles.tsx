import styled from "styled-components";
import { ListEntryProps } from "./footer.models";

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  border-top: 1px solid black;
  left: 0;
  height: 100%;
`;

export const Title = styled.div`
  @media only screen and (max-width: 21rem) {
    visibility: hidden;
    display: none;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  padding-right: 1rem;
  height: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: start;
`;

export const ListEntry = styled.li<ListEntryProps>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  font-weight: ${(props) => (props.active ? "bold" : "300")};
  cursor: pointer;
  line-break: strict;
  flex-wrap: nowrap;
  height: 100%;

  > a {
    padding-left: 1rem;
    font-family: "Nunito";
    text-decoration: none;
    color: black;
    font-size: 0.85rem;
  }
`;
