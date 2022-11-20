import React from "react";
import {
  Root,
  Corner,
  IconContainer,
  Title,
  SubTitle,
  SkillsContainer,
  Skill,
} from "./tile.styles";
import { GrBottomCorner, GrTopCorner } from "react-icons/gr";
import { Paragraph } from "../..";
import { TileProps } from "./tile.models";

const Tile = (props: TileProps) => {
  const getRandomNumber = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const getRandomBoolean = () => {
    return getRandomNumber(0, 2) > 1;
  };

  const getRandomNegativeMarginStyles = () => {
    const moveTop = getRandomBoolean();
    const moveLeft = getRandomBoolean();

    const verticalMargin = "-" + getRandomNumber(0, 1).toFixed(2) + "em";
    const horizontalMargin = "-" + getRandomNumber(0, 0.9).toFixed(2) + "em";

    console.log("verticalMargin: " + verticalMargin);

    return {
      marginTop: moveTop ? verticalMargin : 0,
      marginBottom: !moveTop ? verticalMargin : 0,
      marginLeft: moveLeft ? horizontalMargin : 0,
      marginRight: !moveLeft ? horizontalMargin : 0,
    };
  };

  return (
    <Root>
      <IconContainer>{props.icon}</IconContainer>
      <Title>{props.title}</Title>
      <SubTitle>
        <Paragraph center outstanding>
          {props.subtitle}
        </Paragraph>
      </SubTitle>
      <SkillsContainer>
        <div>
          <div>
            {props.skills.map((entry, index: number) => {
              return (
                <Skill
                  key={index}
                  factor={entry.factor}
                  style={entry.margins ?? getRandomNegativeMarginStyles()}
                >
                  {entry.value}
                </Skill>
              );
            })}
          </div>
        </div>
      </SkillsContainer>
      <Corner top left>
        <GrTopCorner size="2em" />
      </Corner>
      <Corner top right>
        <GrTopCorner style={{ transform: "scaleX(-1" }} size="2em" />
      </Corner>
      <Corner bottom right>
        <GrBottomCorner size="2em" />
      </Corner>
      <Corner bottom left>
        <GrBottomCorner style={{ transform: "scaleX(-1" }} size="2em" />
      </Corner>
    </Root>
  );
};

export default Tile;
