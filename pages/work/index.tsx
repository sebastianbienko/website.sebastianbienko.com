import React from "react";
import { Inner } from "../../layout/global.styles";
import { Root } from "../../layout/my-work.styles";
import PreviousWork from "../../components/pervious-works/previous-works";

const MyWork = () => (
  <React.Fragment>
    <Inner>
      <Root>
        <PreviousWork></PreviousWork>
      </Root>
    </Inner>
  </React.Fragment>
);

export default MyWork;
