import React from "react";
import {ContactsData} from "./contacts-data";
import {Avatar, UserDetails, UserItem, UserList, UserName, UserStatus} from "../shared-layout.styles";

interface ContactsListProps {
    contacts: ContactsData[];
    selectedUserId: number | null;
    onContactSelect: (userId: number) => void;
}

const ContactsList: React.FC<ContactsListProps> = ({contacts, selectedUserId, onContactSelect}) => {
    return (
        <UserList>
            {contacts.map((contact) => (
                <UserItem
                    key={contact.userId}
                    onClick={() => onContactSelect(contact.userId)}
                    isActive={selectedUserId === contact.userId}
                >
                    <Avatar
                        src={contact.avatar || "/default-avatar.png"}
                        alt={`${contact.username}'s avatar`}
                    />
                    <UserDetails>
                        <UserName>{contact.username}</UserName>
                        <UserStatus isOnline={contact.isOnline}>
                            {contact.isOnline ? "Online" : "Offline"}
                        </UserStatus>
                    </UserDetails>
                </UserItem>
            ))}
        </UserList>
    );
};

export default ContactsList;