import styled from "styled-components";
import { TilePositioningProps, TileSkillsProps } from "./tile.models";

export const Root = styled.div`
  width: calc(50% - 6rem);
  min-height: 40rem;
  margin: 0rem 1rem;
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;

  @media screen and (min-width: 400px) {
    min-height: 30rem;
  }

  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 4rem;
  margin-bottom: 1rem;
  justify-self: flex-start;
`;

export const Corner = styled.div<TilePositioningProps>`
  position: absolute;
  top: ${(props) => (props.top ? 0 : "auto")};
  right: ${(props) => (props.right ? 0 : "auto")};
  bottom: ${(props) => (props.bottom ? 0 : "auto")};
  left: ${(props) => (props.left ? 0 : "auto")};
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-family: "Nunito";
  line-height: 1.2rem;
  justify-self: flex-start;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-self: flex-start;
  padding: 0 1rem;
`;

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;

  @media screen and (min-width: 1200px) {
    padding: 0 1rem;
  }

  > div {
    height: 18rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
      text-align: center;
    }
  }
`;

export const Skill = styled.span<TileSkillsProps>`
  font-family: "Nunito";
  font-weight: 400;
  font-size: ${(props) => "calc(1.2rem * " + props.factor + ")"};
  color: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 0.75rem;
  position: relative;
`;
