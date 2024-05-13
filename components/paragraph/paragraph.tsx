import React from "react";
import { ParagraphProps } from "./paragraph.models";
import { Root } from "./paragraph.styles";
import parse from "html-react-parser";

const Paragraph = (props: ParagraphProps) => (
  <Root outstanding={props.outstanding} center={props.center}>
    {parse(props.children) as string}
  </Root>
);

export default Paragraph;
