import styled from "styled-components";
import { fontTypes } from "../theme";

// Props

interface ListEntryProps {
  active?: boolean;
}

// Styles

export const Root = styled.div`
  border-top: 1px solid black;
  padding: 0.5rem 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style-type: none;
`;

export const ListEntry = styled.li<ListEntryProps>`
  margin: 0.5rem 1rem;
  font-weight: ${(props) => (props.active ? "700" : "400")};
  cursor: pointer;

  > a {
    margin-left: 0.25rem;
    font-family: ${fontTypes.menuFontType};
    text-decoration: none;
    color: black;
    font-size: 1rem;
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 1.5rem;
`;
