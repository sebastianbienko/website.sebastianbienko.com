import React from "react";
import { welcomeText } from "./welcome.data";
import {
    Root,
    ProfileImage,
    Typewriter,
    ImageContainer,
    TextContainer,
} from "./welcome.styles";

const Welcome = () => (
    <Root>
        <ImageContainer>
            <ProfileImage
                src={require("../../images/profile_image.jpg")}
                alt="profile_image"
                layout="responsive"
            />
        </ImageContainer>
        <TextContainer>
            <Typewriter
                typeSpeed={50}
                backSpeed={0}
                loop={true}
                strings={welcomeText}
            />
        </TextContainer>
    </Root>
);

export default Welcome;
