import React from "react";
import { RiCodeSSlashLine, RiPencilRuler2Line } from "react-icons/ri";
import {
  backendDevelopmentSkillList,
  solutionArchitectureSkillList,
} from "./skills.data";
import { Intro, Note, Root } from "./skills.styles";
import Tile from "./tile/tile";

const Skills = () => {
  return (
    <>
      <Intro>
        A decade of backend engineering meets deep database expertise to build lean, performant data layers.
      </Intro>
      <Root>
        <Tile
          icon={<RiCodeSSlashLine size="4em" />}
          title="Data Engineer"
          subtitle="Technologies I particularly like to work with"
          skills={backendDevelopmentSkillList}
        />
        <Tile
          icon={<RiPencilRuler2Line size="4em" />}
          title="System architecture"
          subtitle="I like building well structured systems at scale."
          skills={solutionArchitectureSkillList}
        />
      </Root>
      <Note>* of course, I also use AI tools in my daily work.</Note>
    </>
  );
};

export default Skills;
