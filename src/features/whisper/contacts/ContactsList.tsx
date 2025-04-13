import React from "react";
import {ContactsData} from "./contactsData";
import {Avatar, UserDetails, UserItem, UserList, UserName, UserStatus} from "../sharedLayoutForContacts.styles";

interface ContactsListProps {
    contacts: ContactsData[];
    selectedUserId: string | null;
    onContactSelect: (userId: string) => void;
}

const ContactsList: React.FC<ContactsListProps> = ({
                                                       contacts,
                                                       selectedUserId,
                                                       onContactSelect,
                                                   }) => {
    return (
        <UserList>
            {contacts.map((contact) => (
                <UserItem
                    key={contact.userId}
                    onClick={() => onContactSelect(contact.userId)}
                    $isActive={selectedUserId === contact.userId}
                >
                    <Avatar
                        src={contact.avatar || "/default-avatar.png"}
                        alt={`${contact.username}'s avatar`}
                        $isActive={selectedUserId === contact.userId}
                        $large={false}
                    />
                    <UserDetails>
                        <UserName>{contact.username}</UserName>
                        <UserStatus $isOnline={contact.isOnline}>
                            {contact.isOnline ? "Online" : "Offline"}
                        </UserStatus>
                    </UserDetails>
                </UserItem>
            ))}
        </UserList>
    );
};

export default ContactsList;