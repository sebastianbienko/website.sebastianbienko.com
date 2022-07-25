import styled from "styled-components";
import { ParagraphProps } from "./paragraph.models";

export const Root = styled.p<ParagraphProps>`
  font-family: "Nunito";
  font-size: ${(props) => (props.outstanding ? "1.1rem" : "1rem")};
  line-height: ${(props) => (props.outstanding ? "1.4rem" : "1.4rem")};
  margin-bottom: 1.2rem;
  letter-spacing: 0.01rem;
  font-weight: ${(props) => (props.outstanding ? 200 : 400)};
  display: inline-block;
  text-align: ${(props) => (props.center ? "center" : "left")};
`;
