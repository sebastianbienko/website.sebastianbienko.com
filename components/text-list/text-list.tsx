import React from "react";
import parse from "html-react-parser";
import { TextListProps } from "./text-list.models";
import { Root, Item } from "./text-list.styles";

const TextList = ({ items }: TextListProps) => (
  <Root>
    {items.map((item, index) => (
      <Item key={index}>{typeof item === "string" ? parse(item) : item}</Item>
    ))}
  </Root>
);

export default TextList;
