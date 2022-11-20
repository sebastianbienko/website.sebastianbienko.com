import styled from "styled-components";
import { fontTypes } from "../theme";
import { ParagraphProps } from "./paragraph.models";

export const Root = styled.p<ParagraphProps>`
  font-family: ${fontTypes.mainTextFontType};
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1.2rem;
  font-weight: 200;
  display: inline-block;
  text-align: ${(props) => (props.center ? "center" : "left")};
`;
