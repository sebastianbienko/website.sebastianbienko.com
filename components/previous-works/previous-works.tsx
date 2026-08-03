import React from "react";
import TextList from "../text-list/text-list";
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
            <div className="from">{entry.dates.from}</div>
            {entry.dates.till ? <div className="till">{entry.dates.till}</div> : null}
          </Dates>
          <Client>
            <div>{entry.client}</div>
          </Client>
        </Head>
        <Row rightOriented>
          <Roles>{entry.roles}</Roles>
        </Row>
        <Description>
          <TextList items={entry.description} />
        </Description>
      </Entry>
    ))}
  </Root>
);

export default PreviousWork;
