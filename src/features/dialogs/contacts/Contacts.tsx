import {ContactData} from "../mocks/users-mock";
import {ClassNames} from "../../../config/class-names.enum";
import {
    Avatar,
    ContactsContainer, NoContacts,
    UserDetails,
    UserInfoDetails,
    UserItem,
    UserList,
    UserName,
    UserStatus
} from "./contacts.styles";
import {useEffect, useMemo} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {RoutePaths} from "../../../config/nav-links";

interface ContactsProps {
    contacts: ContactData[];
    className: ClassNames.CONTACTS;
}

// Helper Component: User List
const UserListComponent: React.FC<{
    contacts: ContactData[];
    selectedUserId: number | undefined;
    onUserSelect: (id: number) => void;
}> = ({ contacts, selectedUserId, onUserSelect }) => (
    <UserList>
        {contacts.map((contact) => (
            <UserItem
                key={contact.userId}
                onClick={() => onUserSelect(contact.userId)}
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

// Helper Component: User Info Section
const UserInfoSectionComponent: React.FC<{
    contact: ContactData | undefined;
}> = ({ contact }) => (
    <UserInfoDetails>
        {contact ? (
            <UserInfoDetails>
                <Avatar
                    src={contact.avatar || "/default-avatar.png"}
                    alt={`${contact.username}'s avatar`}
                    large
                />
                <UserName>{contact.username}</UserName>
                <UserStatus isOnline={contact.isOnline}>
                    {contact.isOnline ? "Online" : "Offline"}
                </UserStatus>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phoneNumber.nationalNumber}</p>
                <p>About: {contact.about}</p>
            </UserInfoDetails>
        ) : (
            <NoContacts>Select a contact to view details</NoContacts>
        )}
    </UserInfoDetails>
);

// Main Contacts Component
const Contacts: React.FC<ContactsProps> = ({ contacts, className = "" }) => {
    const navigate = useNavigate();
    const { userId } = useParams<{ userId: string }>();

    const selectedUserId = useMemo(
        () => (userId ? parseInt(userId, 10) : contacts[0]?.userId),
        [userId, contacts]
    );

    useEffect(() => {
        if (!userId && contacts.length > 0) {
            navigate(`${RoutePaths.dialogsContacts}/${contacts[0].userId}`);
        }
    }, [userId, contacts, navigate]);

    const selectedContact = useMemo(
        () => contacts.find((contact) => contact.userId === selectedUserId),
        [contacts, selectedUserId]
    );

    const handleUserSelect = (id: number) => {
        navigate(`${RoutePaths.dialogsContacts}/${id}`);
    };

    if (contacts.length === 0) {
        return (
            <ContactsContainer className={className}>
                <NoContacts>No contacts available</NoContacts>
            </ContactsContainer>
        );
    }

    return (
        <ContactsContainer className={className}>
            <UserListComponent
                contacts={contacts}
                selectedUserId={selectedUserId}
                onUserSelect={handleUserSelect}
            />
            <UserInfoSectionComponent contact={selectedContact} />
        </ContactsContainer>
    );
};

export default Contacts;