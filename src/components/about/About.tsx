import React from "react";
import {AboutContainer, Title, Paragraph, Highlight, Link, BottomSection} from "./about.styles";

const About: React.FC = () => {
    return (
        <AboutContainer>
            <Title>About Me</Title>s
            <BottomSection>
                <Paragraph>
                    &emsp;Hi, I’m <Highlight><strong>Serge Hall</strong></Highlight>, a passionate developer with a creative edge. My journey
                    in the tech world started with a deep interest in solving problems and building impactful solutions.
                </Paragraph>
                <Paragraph>
                    I am currently honing my skills in <Highlight><strong>React</strong></Highlight>,
                    <Highlight><strong>Node.js</strong></Highlight>,
                    <Highlight><strong>Express</strong></Highlight>, and various
                    backend technologies like <Highlight><strong>MongoDB</strong></Highlight>,
                    <Highlight><strong>PostgreSQL</strong></Highlight>, and microservices.

                </Paragraph>
                <Paragraph>
                    Beyond coding, I am also a <Highlight>professional photographer</Highlight> who loves capturing
                    moments and telling stories through visuals. My creativity in photography brings a unique perspective
                    to my development work.
                </Paragraph>
                <Paragraph>
                    If you’d like to collaborate, explore my projects, or just have a chat, feel free to{" "}
                    <Link
                        href="mailto:sergioartg@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        reach out
                    </Link>
                    !
                </Paragraph>
            </BottomSection>
        </AboutContainer>
    );
};

export default About;
