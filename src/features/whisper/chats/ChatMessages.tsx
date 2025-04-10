// features/whisper/chats/ChatMessages.tsx
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { MessageItem, MessagesContainer } from "./chats.styles";
import { Message } from "./mocks/messages-mock";
import { selectMessagesByUser } from "./chatSlice"; // ✅ new selector

interface ChatMessagesProps {
    userId: number;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ userId }) => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const messagesContainerRef = useRef<HTMLDivElement | null>(null);

    // Use selector to get messages by user
    const messages: Message[] = useSelector(selectMessagesByUser(userId));

    // Auto-scroll to bottom when new messages are added
    useEffect(() => {
        const container = messagesContainerRef.current;
        const scrollTarget = messagesEndRef.current;

        if (container && scrollTarget) {
            const isNearBottom =
                container.scrollHeight - container.clientHeight <= container.scrollTop + 50;

            if (isNearBottom) {
                scrollTarget.scrollIntoView({ behavior: "smooth", block: "end" });
            }
        }
    }, [messages]);

    if (messages.length === 0) {
        return <p>No messages to display</p>;
    }

    return (
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
    );
};

export default ChatMessages;

// import React, {useEffect, useRef} from "react";
// import {useSelector} from "react-redux";
// import {MessageItem, MessagesContainer} from "./chats.styles";
// import {Message} from "./mocks/messages-mock";
// import { RootState} from "../../../app/store";
// import {ChatsData} from "./chatsData";
//
// interface ChatMessagesProps {
//     userId: number;
// }
//
// const ChatMessages: React.FC<ChatMessagesProps> = ({userId}) => {
//     const messagesEndRef = useRef<HTMLDivElement | null>(null);
//     const messagesContainerRef = useRef<HTMLDivElement | null>(null);
//
//     // Select messages for the given userId
//     const messages = useSelector((state: RootState) =>
//         state.pageContent.whisperPage.chatConversations.find((chat: ChatsData) => chat.user.userId === userId)
//             ?.messages || []
//     );
//
//     // Auto-scroll to the latest message
//     useEffect(() => {
//         if (messagesEndRef.current && messagesContainerRef.current) {
//             const container = messagesContainerRef.current;
//             const isScrolledToBottom =
//                 container.scrollHeight - container.clientHeight <= container.scrollTop + 50;
//
//             if (isScrolledToBottom) {
//                 messagesEndRef.current.scrollIntoView({behavior: "smooth", block: "end"});
//             }
//         }
//     }, [messages]);
//
//     if (messages.length === 0) {
//         return <p>No messages to display</p>;
//     }
//
//     return (
//         <>
//             <MessagesContainer ref={messagesContainerRef}>
//                 {messages.map((message: Message) => (
//                     <MessageItem key={message.id} $fromMe={message.fromMe}>
//                         <div className="timestamp">
//                             {new Date(message.createdAt).toLocaleTimeString([], {
//                                 hour: "2-digit",
//                                 minute: "2-digit",
//                             })}
//                         </div>
//                         <div className="message">{message.message}</div>
//                     </MessageItem>
//                 ))}
//                 <div ref={messagesEndRef} />
//             </MessagesContainer>
//         </>
//     );
// };
//
// export default ChatMessages;