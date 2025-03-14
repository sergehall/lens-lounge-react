import React, {useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import {MessageItem, MessagesContainer} from "./chats.styles";
import {Message} from "./mocks/messages-mock";
import {AppDispatch, RootState, updateChatMessages} from "../../../../app/store";
import {ChatsData} from "./chats-data";

interface ChatMessagesProps {
    userId: number;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({userId}) => {
    const dispatch = useDispatch<AppDispatch>();
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const messagesContainerRef = useRef<HTMLDivElement | null>(null);

    // Select messages for the given userId
    const messages = useSelector((state: RootState) =>
        state.content.whisperPage.chatConversations.find((chat: ChatsData) => chat.user.userId === userId)
            ?.messages || []
    );

    // Auto-scroll to the latest message
    useEffect(() => {
        if (messagesEndRef.current && messagesContainerRef.current) {
            const container = messagesContainerRef.current;
            const isScrolledToBottom =
                container.scrollHeight - container.clientHeight <= container.scrollTop + 50;

            if (isScrolledToBottom) {
                messagesEndRef.current.scrollIntoView({behavior: "smooth", block: "end"});
            }
        }
    }, [messages]);

    if (messages.length === 0) {
        return <p>No messages to display</p>;
    }

    return (
        <>
            <MessagesContainer ref={messagesContainerRef}>
                {messages.map((message: Message) => (
                    <MessageItem key={message.id} $fromMe={message.fromMe}>
                        <div className="timestamp">
                            {new Date(message.createdAt).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </div>
                        <div className="message">{message.message}</div>
                    </MessageItem>
                ))}
                <div ref={messagesEndRef} />
            </MessagesContainer>
        </>
    );
};

export default ChatMessages;