import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes, title } from "./footer.data";
import { Root, Title, List, ListEntry } from "./footer.styles";

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
