import React from "react";
import { RiCodeSSlashLine, RiPencilRuler2Line } from "react-icons/ri";
import {
  backendDevelopmentSkillList,
  solutionArchitectureSkillList,
} from "./skills.data";
import { Root } from "./skills.styles";
import Tile from "./tile/tile";

const Skills = () => {
  return (
    <Root>
      <Tile
        icon={<RiCodeSSlashLine size="4em" />}
        title="Software development"
        subtitle="I like writing clean, robust and performant code, with a focus on backend development."
        skills={backendDevelopmentSkillList}
      />
      <Tile
        icon={<RiPencilRuler2Line size="4em" />}
        title="System architecture"
        subtitle="I like building well structured systems at scale."
        skills={solutionArchitectureSkillList}
      />
    </Root>
  );
};

export default Skills;
