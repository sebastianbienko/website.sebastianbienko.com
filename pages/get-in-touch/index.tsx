import React from "react";
import { Root } from "../../layout/get-in-touch.styles";
import { SocialLinks, ContactInformation } from "../../components";
import { Inner } from "../../layout/global.styles";

const GetInTouch = () => (
  <Inner>
    <Root>
      <ContactInformation />
      <SocialLinks />
    </Root>
  </Inner>
);

export default GetInTouch;
