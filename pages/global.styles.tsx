import styled from "styled-components";
import { animated } from "react-spring";

// Props

interface InnerContainerProps {
  wide?: boolean;
}

//Styles

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

export const Inner = styled(animated.div)<InnerContainerProps>`
  width: calc(100% - 2rem);
  max-width: ${(props) => (props?.wide ? "75rem" : "50rem")};
  min-height: calc(100vh);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem;
  position: absolute;
  left: 50%;
  transform: translateX(calc(-50% - 1rem));
  padding-bottom: 10rem;
  padding-top: 5rem;

  @media screen and (min-width: 500px) {
    padding-bottom: 5rem;
  }
`;

export const SloganWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

export const MenuWrapper = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
`;
