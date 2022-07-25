import React from "react";
import { Root } from "./index.styles";
import { SocialLinks, ContactInformation } from "../../components";
import { Inner } from "../global.styles";

const GetInTouch = () => (
  <Inner>
    <Root>
      <ContactInformation />
      <SocialLinks />
    </Root>
  </Inner>
);

export default GetInTouch;
