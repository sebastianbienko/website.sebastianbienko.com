import React from "react";
import { Root, SvgLogoContainer } from "./skills.styles";
import Tile from "./tile/tile";
import { RiCodeSSlashLine, RiPencilRuler2Line } from "react-icons/ri";
import SitecoreIcon from "../../images/icons/sitecore_thick.svg";
import {
  backendDevelopmentSkillList,
  solutionArchitectureSkillList,
} from "./skills.data";
import Image from "next/image";

const Skills = () => {
  const sitecoreIcon = (
    <Image
      layout="fill"
      objectFit="contain"
      src={SitecoreIcon}
      alt="Sitecore Icon"
    />
  );

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
        title="Solution architecture"
        subtitle="I like building well structured back-end systems at scale."
        skills={solutionArchitectureSkillList}
      />
    </Root>
  );
};

export default Skills;
