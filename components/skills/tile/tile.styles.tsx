import styled from "styled-components";
import { TilePositioningProps } from "./tile.models";

export const Root = styled.div`
  --tile-stroke: 0.2rem;
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

  @media screen and (max-width: 1199px) {
    margin-bottom: 4rem;
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
  width: 1.35rem;
  height: 1.35rem;
  box-sizing: border-box;
  border-style: solid;
  border-color: #000;
  border-width: ${(props) =>
    `${props.top ? "var(--tile-stroke)" : "0"} ${props.right ? "var(--tile-stroke)" : "0"} ${props.bottom ? "var(--tile-stroke)" : "0"} ${props.left ? "var(--tile-stroke)" : "0"}`};
  pointer-events: none;
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

export const SubTitleText = styled.p`
  font-family: "Nunito";
  font-size: 0.8rem;
  line-height: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.01rem;
  text-align: center;
  margin: 0;
`;

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;

  @media screen and (min-width: 1200px) {
    padding: 0 1rem;
  }
`;

export const SkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  column-gap: 2rem;
  row-gap: 0.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-left: 1px dashed #000;
    opacity: 0.65;
  }
`;

export const SkillItem = styled.li`
  text-align: right;
  padding: 0.15rem 0;
  font-size: 0.8rem;
  line-height: 1.4rem;
  min-width: 0;

  &:nth-child(even) {
    text-align: left;
    grid-column: 2;
  }

  &:nth-child(odd) {
    grid-column: 1;
  }
`;

export const SkillTerm = styled.span`
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 0.8rem;
  line-height: 1.4rem;
  font-weight: 400;
  padding: 0 0.2rem;
  display: inline-block;
  max-width: 100%;
  overflow-wrap: anywhere;
  word-break: break-word;
  hyphens: auto;
`;
