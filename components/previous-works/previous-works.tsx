import React from "react";
import Paragraph from "../paragraph/paragraph";
import { PreviousWorkData } from "./previous-works.data";
import { PreviousWorksProps } from "./previous-works.models";
import {
  Root,
  Entry,
  Head,
  Dates,
  Client,
  Row,
  Roles,
  Description,
} from "./previous-works.styles";

const PreviousWork = (props: PreviousWorksProps) => (
  <Root {...props}>
    {PreviousWorkData.map((entry, index) => (
      <Entry key={index}>
        <Head>
          <Dates>
            <div>{entry.dates}</div>
          </Dates>
          <Client>
            <div>{entry.client}</div>
          </Client>
        </Head>
        <Row rightOriented>
          <Roles>{entry.roles}</Roles>
        </Row>
        <Description>
          {entry.description.map((desc, i) => (
            <Paragraph key={i}>{desc}</Paragraph>
          ))}
        </Description>
      </Entry>
    ))}
  </Root>
);

export default PreviousWork;
