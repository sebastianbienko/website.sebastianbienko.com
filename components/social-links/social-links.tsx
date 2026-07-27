import React from "react";
import { RiXingLine, RiLinkedinLine } from "react-icons/ri";
import { Root, SocialIconLinkWrapper, Inner } from "./social-links.styles";

const SocialLinks = () => (
  <Root>
    <Inner>
      <SocialIconLinkWrapper
        href={"https://de.linkedin.com/in/sebastian-bienko-b654b115b"}
        target="_blank"
      >
        <RiLinkedinLine size="2em" />
      </SocialIconLinkWrapper>
      <SocialIconLinkWrapper
        href={"https://www.xing.com/profile/Sebastian_Bienko"}
        target="_blank"
      >
        <RiXingLine size="2em" />
      </SocialIconLinkWrapper>
    </Inner>
  </Root>
);

export default SocialLinks;
