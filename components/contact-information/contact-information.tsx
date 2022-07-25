import React from "react";
import { emailContact } from "./contact-information.data";
import { Root, Email } from "./contact-information.styles";

const ContactInformation = () => (
    <Root>
        <Email href={`mailto:${emailContact.email}`}>
            {emailContact.title}
        </Email>
    </Root>
);

export default ContactInformation;
