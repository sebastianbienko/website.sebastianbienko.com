import React from "react";
import { QuoteProps } from "./quote.models";
import { Root, Blockquote, Clear } from "./quote.styles";

const Quote = (props: QuoteProps) => (
  <Root>
    <Blockquote cite={props.citesource}>
      <p>&quot;{props.children}&quot;</p>
      <footer>
        {props.author}, <cite>{props.cite}</cite>
      </footer>
      <Clear> </Clear>
    </Blockquote>
  </Root>
);

export default Quote;
