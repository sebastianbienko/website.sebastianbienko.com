import React from "react";
import { Root, SocialIconLinkWrapper, Inner } from "./social-links.styles";
import { RiXingLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";

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
