import React from "react";
import parse from "html-react-parser";
import { FaCircleDot } from "react-icons/fa6";
import { TextListProps } from "./text-list.models";
import { Root, Item, Icon, Content } from "./text-list.styles";

const TextList = ({ items }: TextListProps) => (
  <Root>
    {items.map((item, index) => (
      <Item key={index}>
        <Icon>
          <FaCircleDot />
        </Icon>
        <Content>{typeof item === "string" ? parse(item) : item}</Content>
      </Item>
    ))}
  </Root>
);

export default TextList;
