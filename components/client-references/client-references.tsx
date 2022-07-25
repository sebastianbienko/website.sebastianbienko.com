import React from "react";
import { references, title } from "./client-references.data";
import { ClientReferenceData } from "./client-references.models";
import {
  Root,
  References,
  Reference,
  ReferenceImage,
  ReferenceImageContainer,
} from "./client-references.styles";

const ClientReferences = () => {
  return (
    <Root>
      <h2>{title}</h2>
      <References>
        {references.map((reference: ClientReferenceData, index: number) => {
          return (
            <Reference key={index}>
              <ReferenceImageContainer>
                <ReferenceImage
                  src={`/${reference.logo}`}
                  alt={reference.name}
                  layout="fill"
                  objectFit="contain"
                />
              </ReferenceImageContainer>
            </Reference>
          );
        })}
      </References>
    </Root>
  );
};

export default ClientReferences;
