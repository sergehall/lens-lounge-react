import React from "react";
import styles from "./about.module.css"; // Modular CSS
import { AboutContainer, Title, Paragraph, Highlight } from "./about.styles";

const About: React.FC = () => {
    return (
        <AboutContainer>
            <Title>About Me</Title>
            <div className={styles.content}>
                <Paragraph>
                    Hi, I’m <Highlight>Serge Hall</Highlight>, a passionate developer with a creative edge. My journey
                    in the tech world started with a deep interest in solving problems and building impactful solutions.
                </Paragraph>
                <Paragraph>
                    I am currently honing my skills in <Highlight>React, Node.js, Express,</Highlight> and various
                    backend technologies like <Highlight>MongoDB, PostgreSQL,</Highlight> and microservices.
                </Paragraph>
                <Paragraph>
                    Beyond coding, I am also a <Highlight>professional photographer</Highlight> who loves capturing
                    moments and telling stories through visuals. My creativity in photography brings a unique perspective
                    to my development work.
                </Paragraph>
                <Paragraph>
                    If you’d like to collaborate, explore my projects, or just have a chat, feel free to{" "}
                    <a
                        href="mailto:sergioartg@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        reach out
                    </a>
                    !
                </Paragraph>
            </div>
        </AboutContainer>
    );
};

export default About;
