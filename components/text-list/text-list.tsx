import React from "react";
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
        <Content>{item}</Content>
      </Item>
    ))}
  </Root>
);

export default TextList;
