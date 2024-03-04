import React from "react";
import styled from "styled-components";
import {
  VisibilityContext,
  type publicApiType,
} from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Link from "next/link";

/** COMPONENT */

function MenuItem({
  selected,
  title,
  pathname,
  itemId,
}: {
  selected: boolean;
  title: string;
  pathname: string;
  itemId: string;
}) {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId, true);

  return (
    <Link href={pathname}>
      <Root
        data-cy={itemId}
        role="button"
        tabIndex={0}
        visible={isVisible}
        selected={selected}
      >
        {title}
      </Root>
    </Link>
  );
}

export default MenuItem;

/** STYLES: Props */

interface MenuEntryProps {
  selected?: boolean;
  visible?: boolean;
}

/** STYLES: Components */

const Root = styled.div<MenuEntryProps>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  font-weight: ${(props) => (props.selected ? "bold" : "300")};
  cursor: pointer;
  border-top: ${(props) =>
    props.selected ? "3px solid black" : "3px solid white"};
  height: 2rem;
  line-break: strict;
  flex-wrap: nowrap;
  white-space: nowrap;
  padding-right: 1.5rem;

  > a {
    display: inline-block;
    padding: 0 1rem;
    font-family: "Nunito";
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
    height: 100%;
    width: 100%;
    white-space: nowrap;
  }
`;
