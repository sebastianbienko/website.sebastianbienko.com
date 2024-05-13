import React from "react";
import { HeadingProps } from "./heading.models";
import { H1, H2, H3 } from "./heading.styles";

const Heading = (props: HeadingProps) => {
  if (props.priority === 1) {
    return <H1 {...props} />;
  }
  if (props.priority === 2) {
    return <H2 {...props} />;
  }
  if (props.priority === 3) {
    return <H3 {...props} />;
  }
};

export default Heading;
