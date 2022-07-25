import React from "react";
import { Paragraph, Quote, ClientReferences } from "../../components";
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
          product will be long-lasting and extensible. What makes something
          simple might not always be easy to tell though.
        </Paragraph>
        <Paragraph outstanding>
          The simpler it is the more intuitive it can be understood and used.
        </Paragraph>
        <Paragraph>
          Thankfully, our industry already came a long way. UI designers are
          specialists in reaching this goal. &apos;Clean Code&apos; and Design
          Pattern make it easier than ever to find simple solutions for complex
          problems. And today, most teams follow a methodology whose rules are
          described on just a few pages.
        </Paragraph>
        <Quote
          author="Uncle Bob referring to Ward Cunningham"
          cite="Clean Code"
          citesource="https://www.oreilly.com/library/view/clean-code/9780136083238/"
        >
          The designer makes it look ridiculously simple like all exceptional
          designs.
        </Quote>
        <Paragraph>
          Yet, we struggle to use the same principles in fewer predefined areas.
          We continue to end up with unmaintainable documentation just a few
          months after initial creation, with error prone workflows and
          requirements which are hard to understand.
        </Paragraph>
        <Paragraph>
          I believe one way to progress from here is to be more aware that we
          are all designers to some degree and that there is always at least one
          recipient to our work. For me it certainly is a driver to create well
          designed and simple results because I know there will be at least one
          person who has to deal with what I produce. I certainly appreciate
          every time I face a product in which I can see the care that someone
          has given.
        </Paragraph>
      </Root>
      <ClientReferences />
    </Inner>
  </React.Fragment>
);

export default MyWork;
