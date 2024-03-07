import React from "react";
import { Paragraph } from "../../components";
import { Inner } from "../../layout/global.styles";
import { Root } from "../../layout/my-work.styles";

const MyWork = () => (
  <React.Fragment>
    <Inner>
      <Root>
        <Paragraph>
          Over the course of the last years I worked in different roles with
          clients of various industries. During this time I learned to always
          strive for simplicity. It is the easiest way to ensure all parts of a
          product will be long-lasting and extensible.
        </Paragraph>
        <Paragraph>
          Our industry already came a long way. UI designers are specialists in
          reaching this goal. &apos;Clean Code&apos; and Design Pattern make it
          easier than ever to find simple solutions for complex problems. And
          today, most teams follow a methodology whose rules are described on
          just a few pages.
        </Paragraph>
        <Paragraph>
          Yet, we struggle to use the same principles in less predefined areas.
          We continue to end up with unmaintainable documentation, error prone
          workflows and requirements which are hard to understand.
        </Paragraph>
        <Paragraph>
          To progress from here is to understand that we all are designers, in
          one way or another. For me it is a driver to create well designed and
          simple results. I certainly appreciate every time I face a product in
          which I can see the care that someone has given.
        </Paragraph>
      </Root>
    </Inner>
  </React.Fragment>
);

export default MyWork;
