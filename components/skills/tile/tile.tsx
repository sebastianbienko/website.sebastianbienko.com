import React from "react";
import {
  Root,
  Corner,
  IconContainer,
  Title,
  SubTitle,
  SubTitleText,
  SkillsContainer,
  SkillList,
  SkillItem,
  SkillTerm,
} from "./tile.styles";
import { TileProps } from "./tile.models";

const Tile = (props: TileProps) => {
  return (
    <Root>
      <IconContainer>{props.icon}</IconContainer>
      <Title>{props.title}</Title>
      <SubTitle>
        <SubTitleText>{props.subtitle}</SubTitleText>
      </SubTitle>
      <SkillsContainer>
        <SkillList>
          {props.skills.map((entry, index: number) => (
            <SkillItem key={index}>
              <SkillTerm>{entry.value}</SkillTerm>
            </SkillItem>
          ))}
        </SkillList>
      </SkillsContainer>
      <Corner top left />
      <Corner top right />
      <Corner bottom right />
      <Corner bottom left />
    </Root>
  );
};

export default Tile;
