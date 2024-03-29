import React from "react";
import styled from "styled-components";
import { routes, title } from "./footer.data";
import { useRouter } from "next/router";
import Link from "next/link";

/** COMPONENT */

const Footer = () => {
  const pathname = useRouter()?.pathname;
  const menuEntries = routes.map((entry, index) => (
    <ListEntry key={index} active={pathname === entry.pathname}>
      <Link href={entry.pathname}>{entry.title}</Link> 
    </ListEntry>
  ));

  return (
    <Root>
      <List>{menuEntries}</List>
      <Title>{title}</Title>
    </Root>
  );
};

export default Footer;

/** STYLES: Props */

interface ListEntryProps {
  active?: boolean;
}

/** STYLES: Components */

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  border-top: 1px solid black;
  left: 0;
  height: 100%;
`;

const Title = styled.div`
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

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: start;
`;

const ListEntry = styled.li<ListEntryProps>`
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
