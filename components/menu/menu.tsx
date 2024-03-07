import React from "react";
import styled from "styled-components";
import { routes } from "./menu.data";
import { useRouter } from "next/router";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import {
  ScrollMenu,
  VisibilityContext,
  type publicApiType,
} from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import MenuItem from "./menu-item";

/** COMPONENT */

/**<Link href={entry.pathname}>{entry.title}</Link> */

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

/** STYLES: Props */
interface ScrollButtonProps {
  rightOriented?: boolean;
}

/** STYLES: Components */

const NoScrollbar = styled("div")({
  "& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar": {
    display: "none",
  },
  "& .react-horizontal-scrolling-menu--scroll-container": {
    scrollbarWidth: "none",
  },
});

const ScrollButton = styled.div<ScrollButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: ${(props) => (props.rightOriented ? "auto" : "0")};
  right: ${(props) => (props.rightOriented ? "0" : "auto")};
  height: calc(100%);
  background-color: white;
  cursor: pointer;
  z-index: 999;
  padding-top: 3px;

  > div {
    display: block;
    height: calc(100% - 18px);
    width: 100%;
    margin-top: 9px;
    border-right: ${(props) =>
      props.rightOriented ? "auto" : "1px solid black"};
    border-left: ${(props) =>
      props.rightOriented ? "1px solid black" : "auto"};
    text-align: center;
  }
`;

function onWheel(apiObj: publicApiType, ev: React.WheelEvent): void {
  // NOTE: no good standart way to distinguish touchpad scrolling gestures
  // but can assume that gesture will affect X axis, mouse scroll only Y axis
  // of if deltaY too small probably is it touchpad
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else {
    apiObj.scrollPrev();
  }
}
