export interface User {
    userId: number;
    username: string;
    avatar: string;
    email: string;
    isOnline: boolean;
    lastActive: Date;
    firstName: string;
    lastName: string;
    login: string;
    passwordHash: string;
    createdAt: Date;
    orgId: string;
    roles: string[];
    isBanned: boolean;
    banDate: Date | null;
    banReason: string | null;
    confirmationCode: string;
    expirationDate: Date;
    isConfirmed: boolean;
}
// The type of phone number
export enum PhoneType {
    MOBILE = "mobile",
    LANDLINE = "landline",
    VOIP = "VOIP",
    UNKNOWN = "unknown"
}

export interface CellPhoneData {
    id: number;
    userId: number;
    number: string; // The full phone number, including country code
    countryCode: string; // The country dialing code (e.g., +1, +44)
    nationalNumber: string; // The local phone number without country code
    region: string;
    type: PhoneType;
    isValid: boolean;
    displayToOthers: true,
}

export interface AddressData {
    id: number;
    userId: number;
    street: string; // Street address, including house number
    city: string; // City or locality
    state: string; // State, province, or region (optional for countries without states)
    postalCode: string; // Postal or ZIP code
    country: string;
    additionalInfo?: string;
    coordinates?: {
        latitude: number; // Latitude for geolocation
        longitude: number; // Longitude for geolocation
    };
    isResidential: boolean;
}

export interface ContactData {
    id: number;
    userId: number;
    avatar: string;
    username: string;
    firstName: string;
    lastName: string;
    phoneNumber: CellPhoneData;
    addresses: AddressData;
    email: string;
    about: string;
    isFavorite: boolean;
    isBlocked: boolean;
    isPinned: boolean;
    isArchived: boolean;
    isDeleted: boolean;
    isOnline: boolean;
}

export const combineContactData = (): ContactData[] => {
    return users.map(user => {
        const phoneNumber = cellPhoneDataMock.find(phone => phone.userId === user.userId);
        if (!phoneNumber) {
            throw new Error(`Phone number not found for userId: ${user.userId}`);
        }
        const address = addressDataMock.find(addr => addr.userId === user.userId);
        if (!address) {
            throw new Error(`Address not found for userId: ${user.userId}`);
        }


        return {
            id: user.userId,
            userId: user.userId,
            avatar: user.avatar,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: phoneNumber,
            addresses: address,
            email: user.email,
            about: `About ${user.firstName} ${user.lastName}`,
            isFavorite: false,
            isBlocked: false,
            isPinned: false,
            isArchived: false,
            isDeleted: false,
            isOnline: user.isOnline,
        };
    });
};

export const contactDataMock:ContactData[] = combineContactData();


export const users: User[] = [
    {
        userId: 1,
        username: "EmmyMax",
        avatar: "https://masterpiecer-images.s3.yandex.net/e29101853b7111ee934e1282c0ba7723:upscaled",
        email: "emmymax@example.com",
        isOnline: true,
        lastActive: new Date(),
        firstName: "Emmy",
        lastName: "Noether",
        login: "emmymax@example.com",
        passwordHash: "hashedPassword1",
        createdAt: new Date(),
        orgId: "IT_INCUBATOR",
        roles: ["USER"],
        isBanned: false,
        banDate: null,
        banReason: null,
        confirmationCode: "code1",
        expirationDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        isConfirmed: false,
    },
    {
        userId: 2,
        username: "Bob1618",
        avatar: "https://i.ytimg.com/vi/ujvaADXPO8E/maxresdefault.jpg",
        email: "bobkuzyuberdin@example.com",
        isOnline: false,
        lastActive: new Date("2023-12-01T14:30:00"),
        firstName: "Bob",
        lastName: "Kuzyuberdin",
        login: "bobkuzyuberdin@example.com",
        passwordHash: "hashedPassword2",
        createdAt: new Date(),
        orgId: "IT_INCUBATOR",
        roles: ["USER"],
        isBanned: false,
        banDate: null,
        banReason: null,
        confirmationCode: "code2",
        expirationDate: new Date(),
        isConfirmed: false,
    },
    {
        userId: 3,
        username: "PierreDeFermat",
        avatar: "https://thumbs.dreamstime.com/b/belarus-city-gomil-september-holiday-slavic-man-national-dress-young-ukrainian-belarusian-guy-embroidered-shirt-187379288.jpg",
        email: "pierrdefermat@example.com",
        isOnline: true,
        lastActive: new Date("2023-11-01T10:15:00"),
        firstName: "Pierre",
        lastName: "DeFermat",
        login: "pierrdefermat@example.com",
        passwordHash: "hashedPassword3",
        createdAt: new Date(),
        orgId: "IT_INCUBATOR",
        roles: ["USER"],
        isBanned: false,
        banDate: null,
        banReason: null,
        confirmationCode: "code3",
        expirationDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        isConfirmed: false,
    },
];


export const addressDataMock: AddressData[] = [
    {
        id: 201,
        userId: 1,
        street: "Algebra Alley 42",
        city: "Erlangen",
        state: "Bavaria",
        postalCode: "91054",
        country: "Germany",
        additionalInfo: "Close to the university library",
        coordinates: { latitude: 49.589674, longitude: 11.004835 },
        isResidential: true,
    },
    {
        id: 202,
        userId: 2,
        street: "Silicon Valley Blvd 7",
        city: "San Jose",
        state: "California",
        postalCode: "95112",
        country: "USA",
        additionalInfo: "Suite 101, next to the coffee shop",
        coordinates: { latitude: 37.7749, longitude: -122.4194 },
        isResidential: false,
    },
    {
        id: 203,
        userId: 3,
        street: "Mathematics Street 123",
        city: "Toulouse",
        state: "Occitanie",
        postalCode: "31000",
        country: "France",
        additionalInfo: "Next to the Fermat Museum",
        coordinates: { latitude: 43.604652, longitude: 1.444209 },
        isResidential: true,
    },
];

export const cellPhoneDataMock: CellPhoneData[] = [
    {
        id: 101,
        userId: 1,
        number: "+491751234567",
        countryCode: "+49",
        nationalNumber: "1751234567",
        region: "Bavaria",
        type: PhoneType.MOBILE,
        isValid: true,
        displayToOthers: true,
    },
    {
        id: 102,
        userId: 2,
        number: "+18004561234",
        countryCode: "+1",
        nationalNumber: "8004561234",
        region: "California",
        type: PhoneType.LANDLINE,
        isValid: true,
        displayToOthers: true,
    },
    {
        id: 103,
        userId: 3,
        number: "+33678912345",
        countryCode: "+33",
        nationalNumber: "678912345",
        region: "Occitanie",
        type: PhoneType.MOBILE,
        isValid: true,
        displayToOthers: true,
    },
];

