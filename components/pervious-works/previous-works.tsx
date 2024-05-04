import React from "react";
import styled from "styled-components";
import Paragraph from "../paragraph/paragraph";

interface PreviousWorksProps {
  rightOriented?: boolean;
}

interface RowProps {
  rightOriented?: boolean;
}

const PreviousWork = (props: PreviousWorksProps) => <Root {...props}>
<Row><Dates>01/23 - 02/24</Dates><Client>MHP / Porsche</Client></Row>
<Row rightOriented><Roles>tech lead / backend developer</Roles></Row>
<Description>
  <Paragraph>The Porsche.com website is a key instrument for the companies online marketing strategy and allows users to explore their products all over the world.</Paragraph>
  <Paragraph>As such, it is vital to have a high availability while being frequently updated. I first joined the "platform team", which was responsible for managing this foundation, as backend developer. Later, I took over as tech lead and was able to improve structure and processes, while advancing technological improvmenents with focus on stability and headless system                                                        capabilities.</Paragraph>
</Description>
</Root>;

const Root = styled.div<PreviousWorksProps>`
  font-family: "Nunito";
  font-size: 1rem;
  line-height: 1.4rem;
  margin-bottom: 1.2rem;
  letter-spacing: 0.01rem;
  font-weight: 400;
  display: inline-block;
  text-align: left;
`;

const Dates = styled.span`

`

const Client = styled.span`
    font-weight: 800;
    &:before{
        font-weight: 400;
        content: "for ";
        font-size: 0.8rem;
    }
`

const Roles = styled.span`
  font-weight: 400;

  &:before{
        font-weight: 400;
        content: "as ";
        font-size: 0.8rem;
    }
`

const Description = styled.div`
  margin-top: 2rem;
  width: 80vw;
    max-width: 30rem;
`

const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => (props.rightOriented ? "flex-end" : "space-between")};
    width: 80vw;
    max-width: 30rem;
`

export default PreviousWork;