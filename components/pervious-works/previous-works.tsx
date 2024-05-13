import React from "react";
import styled from "styled-components";
import Paragraph from "../paragraph/paragraph";
import { PreviousWorkData } from "./previous-works.data";

interface PreviousWorksProps {
  rightOriented?: boolean;
}

interface RowProps {
  rightOriented?: boolean;
}

const PreviousWork = (props: PreviousWorksProps) => (
  <Root {...props}>
    {PreviousWorkData.map((entry, index) => (
      <Entry>
        <Head>
          <Dates><div>{entry.dates}</div></Dates>
          <Client><div>{entry.client}</div></Client>
        </Head>
        <Row rightOriented>
          <Roles>{entry.roles}</Roles>
        </Row>
        <Description>
          {entry.description.map((desc, i) => (
            <Paragraph>{desc}</Paragraph>
          ))}
        </Description>
      </Entry>
    ))}
  </Root>
);

const Root = styled.div<PreviousWorksProps>`
  font-family: "Nunito";
  font-size: 1rem;
  line-height: 1.4rem;
  margin-bottom: 1.2rem;
  letter-spacing: 0.01rem;
  font-weight: 400;
  display: inline-block;
  text-align: left;
  width: 80vw;
  max-width: 30rem;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 50rem) {
    display: block;
  }
`

const Dates = styled.span`
margin-left: -3.5rem;

  @media only screen and (max-width: 50rem) {
    margin-left: 0rem;
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  } 
`;

const Client = styled.span`
  font-weight: 800;

  @media only screen and (max-width: 50rem) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  } 

  > div {
    &:before {
    font-weight: 400;
    content: "for ";
    font-size: 0.8rem;
  }
  }
  
`;

const Roles = styled.span`
  font-weight: 400;

  &:before {
    font-weight: 400;
    content: "as ";
    font-size: 0.8rem;
  }
`;

const Description = styled.div`
  margin-top: 2rem;
  width: 80vw;
  max-width: 30rem;
`;

const Entry = styled.div`
  margin-bottom: 4rem;
`

const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.rightOriented ? "flex-end" : "space-between"};
  
`;

export default PreviousWork;
