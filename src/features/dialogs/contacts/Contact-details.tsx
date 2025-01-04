import React from "react";
import {ContactsData} from "./contacts-data";
import {formatAddress} from "./format-address";
import {InfoSection, UserInfoDetails, UserName, UserStatus} from "./contacts.styles";
import {Avatar, NoContacts} from "../shared-layout.styles";


interface ContactDetailsProps {
    contact: ContactsData | null;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({contact}) => {
    if (!contact) {
        return <NoContacts>No Contacts to view details</NoContacts>;
    }

    return (
        <InfoSection>
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
                <p><strong>First Name</strong>: <span className="hoverable">{contact.firstName}</span></p>
                <p><strong>Last Name</strong>: <span className="hoverable">{contact.lastName}</span></p>
                <p><strong>Email</strong>: <span className="hoverable">{contact.email}</span></p>
                <p><strong>Phone</strong>: <span className="hoverable">{contact.phoneNumber.nationalNumber}</span>
                </p>
                <p><strong>Address</strong>: <span className="hoverable">{formatAddress(contact.addresses)}</span>
                </p>
                <p><strong>About</strong>: <span className="hoverable">{contact.about}</span></p>
            </UserInfoDetails>
        </InfoSection>
    );
};

export default ContactDetails;

