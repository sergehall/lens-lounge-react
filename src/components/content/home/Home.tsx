import React from "react";
import styles from "./home.module.css";
import { Highlight, HomeContainer, WelcomeText, BottomSection } from "./home.styles";

const Home: React.FC = () => {
    return (
        <HomeContainer>
            <WelcomeText>
                Welcome to <Highlight>Serge Hall's Portfolio</Highlight>
            </WelcomeText>
            <BottomSection>
                <p className={styles.description}>
                    &emsp;Hello, I am <strong>Serge</strong>, a passionate and dedicated student developer currently honing
                    my skills in both front-end and back-end development. I am proud to be part of a dynamic learning program
                    at{" "}
                    <a
                        href="https://it-incubator.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.navItemHighlight}
                    >
                        <strong>IT-Incubator</strong>
                    </a>, where I am building a comprehensive foundation in modern web technologies.
                </p>
                <p className={styles.description}>
                    &emsp;My journey in the technology industry is in its early stages, but I have already gained valuable
                    hands-on experience working on projects from scratch, applying the knowledge and best practices taught
                    by seasoned professionals.
                </p>
                <p className={styles.description}>
                    &emsp;I am actively broadening my expertise in technologies such as <strong>React, Node.js, Express,
                    NestJS, MongoDB, PostgreSQL,</strong> and modern architectural patterns like <strong>SOLID, Hexagonal
                    Architecture,</strong> and <strong>SAGA.</strong> My ongoing learning includes{" "}
                    <strong>Microservices, RabbitMQ, WebSocket,</strong> and <strong>DevOps fundamentals,</strong>
                    including Docker, Kubernetes, and Jenkins.
                </p>
                <p className={styles.description}>
                    &emsp;You can explore my work on{" "}
                    <a
                        href="https://github.com/sergehall"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.navItemHighlight}
                    >
                        <strong>GitHub</strong>
                    </a> and track my progress on{" "}
                    <a
                        href="https://www.codewars.com/users/SergeHall"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.navItemHighlight}
                    >
                        <strong>Codewars</strong>
                    </a>.
                </p>
                <p className={styles.description}>
                    &emsp;As a professional photographer, I bring creativity and attention to detail to all aspects of
                    my work. You can view my photography portfolio at{" "}
                    <a
                        href="https://www.sergioartg.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.navItemHighlight}
                    >
                        <strong>sergioartg.com</strong>
                    </a> or follow my creative journey on Instagram at{" "}
                    <a
                        href="https://www.instagram.com/sergioartg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.navItemHighlight}
                    >
                        <strong>@sergioartg</strong>
                    </a>.
                </p>
                <p className={styles.description}>
                    &emsp;I am enthusiastic about contributing to impactful real-world projects, whether by joining a
                    professional team or collaborating with driven and like-minded developers. My ultimate goal is to
                    grow continuously as a developer, leveraging the power of teamwork and innovation to deliver
                    meaningful and lasting solutions.
                </p>
            </BottomSection>
        </HomeContainer>
    );
};

export default Home;
