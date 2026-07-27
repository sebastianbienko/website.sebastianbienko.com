import React from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { useRouter } from "next/router";
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { routes } from "./menu.data";
import { NoScrollbar, ScrollButton, onWheel } from "./menu.styles";
import MenuItem from "./menu-item";

const RightArrow = () => {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible("last", false);
  return (
    <ScrollButton rightOriented={true}>
      <RiArrowRightSLine
        alignmentBaseline="central"
        size={30}
        onClick={() => visibility.scrollNext()}
        opacity={isLastItemVisible ? 0 : 1}
      >
        Right
      </RiArrowRightSLine>
    </ScrollButton>
  );
};

const LeftArrow = () => {
  const visibility = React.useContext<publicApiType>(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible("first", false);
  return (
    <ScrollButton rightOriented={false}>
      <RiArrowLeftSLine
        alignmentBaseline="central"
        size={30}
        onClick={() => visibility.scrollPrev()}
        className="left"
        opacity={isFirstItemVisible ? 0 : 1}
      >
        Left
      </RiArrowLeftSLine>
    </ScrollButton>
  );
};

const Menu = () => {
  const pathname = useRouter()?.pathname;

  const menuEntries = routes.map((entry, index) => (
    <MenuItem
      key={index}
      itemId={index.toString()}
      selected={pathname === entry.pathname}
      title={entry.title}
      pathname={entry.pathname}
    />
  ));

  return (
    <NoScrollbar>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
      >
        {menuEntries}
      </ScrollMenu>
    </NoScrollbar>
  );
};

export default Menu;
