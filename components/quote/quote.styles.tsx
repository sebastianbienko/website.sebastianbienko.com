import styled from "styled-components";
import { fontTypes } from "../theme";

export const Root = styled.div`
  padding: 0.5rem 0rem 1.5rem 0rem;
`;

export const Blockquote = styled.blockquote`
  text-align: center;

  > p {
    font-family: ${fontTypes.mainTextFontType};
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 200;
    padding: 0 1rem;
    display: inline-block;
    text-align: left;
  }

  > footer {
    font-family: ${fontTypes.mainTextFontType};
    float: right;
    font-weight: 200;
    max-width: 50%;
    font-size: 1.1rem;
    line-height: 1.1rem;
    margin-top: 0.4rem;

    > cite {
      font-style: italic;
    }
  }
`;

export const Clear = styled.div`
  clear: both;
`;
