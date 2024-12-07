import React from "react";
import styles from "./contact.module.css"; // Modular CSS
import { ContactContainer, Title, Form, Input, TextArea, Button } from "./contact.styles"; // Styled-components

const Contact: React.FC = () => {
    return (
        <ContactContainer>
            <Title>Contact Me</Title>
            <p className={styles.description}>
                Have a project idea, a question, or just want to say hi? Feel free to reach out! I’d love to connect and
                explore opportunities to work together.
            </p>
            <Form action="https://formsubmit.co/example-email" method="POST">
                <Input type="text" name="name" placeholder="Your Name" required />
                <Input type="email" name="email" placeholder="Your Email" required />
                <TextArea name="message" placeholder="Your Message" rows={5} required />
                <Button type="submit">Send Message</Button>
            </Form>
        </ContactContainer>
    );
};

export default Contact;
