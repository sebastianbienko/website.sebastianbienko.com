import React from "react";
import { Root, SvgLogoContainer } from "./skills.styles";
import Tile from "./tile/tile";
import { RiCodeSSlashLine, RiPencilRuler2Line } from "react-icons/ri";
import SitecoreIcon from "../../images/icons/sitecore_thick.svg";
import {
  frontendSkillList,
  netSkillList,
  sitecoreSkillList,
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
        title="Software engineering"
        subtitle="I like building well structured back-end systems at scale."
        skills={netSkillList}
      />
      <Tile
        icon={<RiPencilRuler2Line size="4em" />}
        title="Solution architecture"
        subtitle="Bringing beautiful designs to life is most enjoyable to me when combined with a very interactive UI."
        skills={frontendSkillList}
      />
    </Root>
  );
};

export default Skills;
