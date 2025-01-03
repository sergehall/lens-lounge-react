import {ClassNames} from "../../../config/class-names.enum";
import {
    Avatar,
    ContactsContainer, NoContacts,
    UserDetails,
    UserInfoDetails, UserInfoSection,
    UserItem,
    UserList,
    UserName,
    UserStatus
} from "./contacts.styles";
import {useEffect, useMemo} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {RoutePaths} from "../../../config/nav-links";
import {ContactsData} from "./contacts-data";
import {formatAddress} from "./format-address";

interface ContactsProps {
    contacts: ContactsData[];
    className: ClassNames.CONTACTS;
}

// Helper Component: User List
const UserListComponent: React.FC<{
    contacts: ContactsData[];
    selectedUserId: number | undefined;
    onUserSelect: (id: number) => void;
}> = ({contacts, selectedUserId, onUserSelect}) => (
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
    contact: ContactsData | undefined;
}> = ({contact}) => (
    <UserInfoDetails>
        {contact ? (
            <UserInfoSection>
                <Avatar
                    src={contact.avatar || "/default-avatar.png"}
                    alt={`${contact.username}'s avatar`}
                    large
                />
                <UserName>{contact.username}</UserName>
                <UserStatus isOnline={contact.isOnline}>
                    {contact.isOnline ? "Online" : "Offline"}
                </UserStatus>
                <UserInfoDetails>
                    <p>First name: <span className="hoverable">{contact.firstName}</span></p>
                    <p>Last name: <span className="hoverable">{contact.lastName}</span></p>
                    <p>Email: <span className="hoverable">{contact.email}</span></p>
                    <p>Phone: <span className="hoverable">{contact.phoneNumber.nationalNumber}</span></p>
                    <p>Address: <span className="hoverable">{formatAddress(contact.addresses)}</span></p>
                    <p>About: <span className="hoverable">{contact.about}</span></p>
                </UserInfoDetails>
            </UserInfoSection>
        ) : (
            <NoContacts>Select a contact to view details</NoContacts>
        )}
    </UserInfoDetails>
);

// Main Contacts Component
const Contacts: React.FC<ContactsProps> = ({contacts, className}) => {
    const navigate = useNavigate();
    const {userId} = useParams<{ userId: string }>();

    const selectedUserId = useMemo(
        () => (userId ? parseInt(userId, 10) : contacts[0].userId),
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
            <UserInfoSectionComponent contact={selectedContact}/>
        </ContactsContainer>
    );
};

export default Contacts;