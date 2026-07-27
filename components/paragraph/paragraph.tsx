import React from "react";
import parse from "html-react-parser";
import { ParagraphProps } from "./paragraph.models";
import { Root } from "./paragraph.styles";

const Paragraph = (props: ParagraphProps) => (
  <Root outstanding={props.outstanding} center={props.center}>
    {parse(props.children) as string}
  </Root>
);

export default Paragraph;
