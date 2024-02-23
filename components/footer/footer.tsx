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
  padding-top: 2px;
`;

const Title = styled.span`
  @media only screen and (max-width: 500px) {
    visibility: hidden;
    display: none;
  }

  font-weight: bold;
  padding: 0 1rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: start;
`;

const ListEntry = styled.li<ListEntryProps>`
  display: inline;
  position: relative;
  font-weight: ${(props) => (props.active ? "bold" : "300")};
  cursor: pointer;
  line-break: strict;
  flex-wrap: nowrap;

  > a {
    display: inline-block;
    padding: 0 1rem;
    font-family: "Nunito";
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
    height: 100%;
    width: 100%;
  }
`;
