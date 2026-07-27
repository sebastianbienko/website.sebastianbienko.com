import styled from "styled-components";
import { type publicApiType } from "react-horizontal-scrolling-menu";
import { ScrollButtonProps } from "./menu.models";

export const NoScrollbar = styled("div")({
  "& .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar": {
    display: "none",
  },
  "& .react-horizontal-scrolling-menu--scroll-container": {
    scrollbarWidth: "none",
  },
});

export const ScrollButton = styled.div<ScrollButtonProps>`
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

export function onWheel(apiObj: publicApiType, ev: React.WheelEvent): void {
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
