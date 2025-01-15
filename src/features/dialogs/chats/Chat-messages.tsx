import React from "react";
import {Message} from "./mocks/messages-mock";
import {MessageItem, MessagesContainer} from "./chats.styles";


interface ChatMessagesProps {
    messages: Message[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
    if (messages.length === 0) {
        return <p>No messages to display</p>;
    }

    return (
        <MessagesContainer>
            {messages.map((message) => (
                <MessageItem key={message.id} fromMe={message.fromMe}>
                    <div className="timestamp">
                        {new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                    <div className="message">{message.message}</div>
                </MessageItem>
            ))}
        </MessagesContainer>
    );
};

export default ChatMessages;