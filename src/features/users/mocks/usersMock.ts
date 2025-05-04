import { v4 } from 'uuid';

import { OrgIdEnums } from '../enums/orgId';
import { UserRolesEnums } from '../enums/userRoles';

export interface User {
  userId: string;
  username: string;
  avatarUrl: string;
  email: string;
  isOnline: boolean;
  lastActive: string;
  firstName: string;
  lastName: string;
  login: string;
  passwordHash: string;
  createdAt: string;
  orgId: string;
  roles: string[];
  isBanned: boolean;
  banDate: string | null;
  banReason: string | null;
  confirmationCode: string;
  expirationDate: string;
  isConfirmed: boolean;
  birthday: string;
  education: string;
  website: string;
  photoUrl: string;
}

// The type of phone number
export enum PhoneType {
  MOBILE = 'mobile',
  LANDLINE = 'landline',
  VOIP = 'VOIP',
  UNKNOWN = 'unknown',
}

export interface CellPhoneData {
  id: string;
  userId: string;
  number: string; // The full phone number, including country code
  countryCode: string; // The country dialing code (e.g., +1, +44)
  nationalNumber: string; // The local phone number without country code
  region: string;
  type: PhoneType;
  isValid: boolean;
  displayToOthers: true;
}

export interface AddressData {
  id: string;
  userId: string;
  street: string; // Street address, including house number
  city: string; // City or locality
  state: string; // State, province, or region (optional for countries without states)
  postalCode: string; // Postal or ZIP code
  country: string;
  additionalInfo?: string;
  coordinates?: {
    latitude: number; // Latitude for geolocation
    longitude: number; // Longitude for geolocation,
  };
  isResidential: boolean;
}

export const users: User[] = [
  {
    userId: '1',
    username: 'EmmyMax',
    avatarUrl:
      'https://masterpiecer-images.s3.yandex.net/e29101853b7111ee934e1282c0ba7723:upscaled',
    email: 'emmymax@example.com',
    isOnline: true,
    lastActive: new Date().toISOString(),
    firstName: 'Emmy',
    lastName: 'Noether',
    login: 'emmymax@example.com'.toLowerCase(),
    passwordHash: 'hashedPassword1',
    createdAt: new Date().toISOString(),
    orgId: OrgIdEnums.IT_INCUBATOR,
    roles: [UserRolesEnums.USER],
    isBanned: false,
    banDate: null,
    banReason: null,
    confirmationCode: v4(),
    expirationDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    isConfirmed: false,
    birthday: 'January 1, 1990',
    education: "Bachelor's in Computer Science",
    website: 'https://defaultwebsite.com',
    photoUrl: 'https://defaultavatar.com/avatar.jpg',
  },
  {
    userId: '2',
    username: 'Dimych#1751',
    avatarUrl: 'https://i.ytimg.com/vi/ujvaADXPO8E/maxresdefault.jpg',
    email: 'dimychkuzyuberdin@example.com',
    isOnline: false,
    lastActive: new Date('2023-12-01T14:30:00').toISOString(),
    firstName: 'Dimych',
    lastName: 'Kuzyuberdin',
    login: 'dimychkuzyuberdin@example.com'.toLowerCase(),
    passwordHash: 'hashedPassword2',
    createdAt: new Date().toISOString(),
    orgId: OrgIdEnums.IT_INCUBATOR,
    roles: [UserRolesEnums.USER, UserRolesEnums.SA],
    isBanned: false,
    banDate: null,
    banReason: null,
    confirmationCode: v4(),
    expirationDate: new Date().toISOString(),
    isConfirmed: false,
    birthday: 'January 2, 1992',
    education: "Bachelor's in Computer Science",
    website: 'https://defaultwebsite.com',
    photoUrl: 'https://defaultavatar.com/avatar.jpg',
  },
  {
    userId: '3',
    username: 'PierreDeFermat',
    avatarUrl:
      'https://thumbs.dreamstime.com/b/belarus-city-gomil-september-holiday-slavic-man-national-dress-young-ukrainian-belarusian-guy-embroidered-shirt-187379288.jpg',
    email: 'pierrdefermat@example.com',
    isOnline: true,
    lastActive: new Date('2023-11-01T10:15:00').toISOString(),
    firstName: 'Pierre',
    lastName: 'DeFermat',
    login: 'pierrdefermat@example.com'.toLowerCase(),
    passwordHash: 'hashedPassword3',
    createdAt: new Date().toISOString(),
    orgId: OrgIdEnums.IT_INCUBATOR,
    roles: [UserRolesEnums.USER],
    isBanned: false,
    banDate: null,
    banReason: null,
    confirmationCode: v4(),
    expirationDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    isConfirmed: false,
    birthday: 'January 3, 1993',
    education: "Bachelor's in Computer Science",
    website: 'https://defaultwebsite.com',
    photoUrl: 'https://defaultavatar.com/avatar.jpg',
  },
  {
    userId: '4',
    username: 'Lovelace',
    avatarUrl:
      'https://camo.githubusercontent.com/d05e80bf07249ed858dcd65c362524dbcbe72093973c35421de936560ef7a7af/68747470733a2f2f626c6f672e6765656b68756e7465722e636f6d2e62722f77702d636f6e74656e742f75706c6f6164732f323032322f30312f6164612d6c6f76656c6163652d322e6a7067',
    email: 'lovelace@example.com',
    isOnline: false,
    lastActive: new Date('2023-01-20T14:00:00').toISOString(),
    firstName: 'Ada',
    lastName: 'Lovelace',
    login: 'lovelace@example.com'.toLowerCase(),
    passwordHash: 'hashedPassword4',
    createdAt: new Date().toISOString(),
    orgId: OrgIdEnums.IT_INCUBATOR,
    roles: [UserRolesEnums.USER],
    isBanned: false,
    banDate: null,
    banReason: null,
    confirmationCode: v4(),
    expirationDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    isConfirmed: false,
    birthday: 'January 4, 1994',
    education: "Bachelor's in Computer Science",
    website: 'https://defaultwebsite.com',
    photoUrl: 'https://defaultavatar.com/avatar.jpg',
  },
  {
    userId: '5',
    username: 'Riemann',
    avatarUrl:
      'https://production-it-incubator.s3.eu-central-1.amazonaws.com/it-kamasutra/Image/c959a045-0eb3-4b46-af08-851e1052e40a_blob',
    email: 'riemann@example.com',
    isOnline: true,
    lastActive: new Date('2023-01-24T12:15:00').toISOString(),
    firstName: 'Bernhard',
    lastName: 'Riemann',
    login: 'riemann@example.com'.toLowerCase(),
    passwordHash: 'hashedPassword5',
    createdAt: new Date().toISOString(),
    orgId: OrgIdEnums.IT_INCUBATOR,
    roles: [UserRolesEnums.USER],
    isBanned: false,
    banDate: null,
    banReason: null,
    confirmationCode: v4(),
    expirationDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(),
    isConfirmed: false,
    birthday: 'January 5, 1995',
    education: "Bachelor's in Computer Science",
    website: 'https://defaultwebsite.com',
    photoUrl: 'https://defaultavatar.com/avatar.jpg',
  },
  {
    userId: '6',
    username: 'SofiaPrixBordin',
    avatarUrl:
      'https://production-it-incubator.s3.eu-central-1.amazonaws.com/it-kamasutra/Image/5d35280f-5521-489a-a372-45efacaf084e_4d2ee26774cf11eeaead5696910b1137_upscaled.jpg',
    email: 'kovalevskaya@example.com',
    isOnline: false,
    lastActive: new Date('2023-11-01T10:12:00').toISOString(),
    firstName: 'Sofia',
    lastName: 'Kovalevskaya',
    login: 'kovalevskaya@example.com'.toLowerCase(),
    passwordHash: 'hashedPassword6',
    createdAt: new Date().toISOString(),
    orgId: OrgIdEnums.IT_INCUBATOR,
    roles: [UserRolesEnums.USER],
    isBanned: false,
    banDate: null,
    banReason: null,
    confirmationCode: v4(),
    expirationDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    isConfirmed: false,
    birthday: 'January 6, 1996',
    education: "Bachelor's in Computer Science",
    website: 'https://defaultwebsite.com',
    photoUrl: 'https://defaultavatar.com/avatar.jpg',
  },
  {
    userId: '7',
    username: 'Ramanujan1729',
    avatarUrl:
      'https://production-it-incubator.s3.eu-central-1.amazonaws.com/it-kamasutra/Image/18da458e-2abf-433f-9517-2403c0072655_blob',
    email: 'george@example.com',
    isOnline: true,
    lastActive: new Date().toISOString(),
    firstName: 'Ramanujan',
    lastName: 'Srinivasa',
    login: 'george@example.com'.toLowerCase(),
    passwordHash: 'hashedPassword7',
    createdAt: new Date().toISOString(),
    orgId: OrgIdEnums.IT_INCUBATOR,
    roles: [UserRolesEnums.USER],
    isBanned: false,
    banDate: null,
    banReason: null,
    confirmationCode: v4(),
    expirationDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    isConfirmed: false,
    birthday: 'January 7, 1997',
    education: "Bachelor's in Computer Science",
    website: 'https://defaultwebsite.com',
    photoUrl: 'https://defaultavatar.com/avatar.jpg',
  },
  {
    userId: '8',
    username: 'Gauss',
    avatarUrl:
      'https://preview.redd.it/regular-day-of-a-belarusian-man-v0-izkc3fdjc5cc1.jpg?width=1024&format=pjpg&auto=webp&s=0ada9fdbd8628217b9ca6885c9f25e5190aa1f0d',
    email: 'gauss@example.com',
    isOnline: false,
    lastActive: new Date('2023-12-01T10:15:00').toISOString(),
    firstName: 'Carl',
    lastName: 'Friedrich Gauss',
    login: 'gauss@example.com'.toLowerCase(),
    passwordHash: 'hashedPassword8',
    createdAt: new Date().toISOString(),
    orgId: OrgIdEnums.IT_INCUBATOR,
    roles: [UserRolesEnums.USER],
    isBanned: false,
    banDate: null,
    banReason: null,
    confirmationCode: v4(),
    expirationDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    isConfirmed: false,
    birthday: 'January 8, 1998',
    education: "Bachelor's in Computer Science",
    website: 'https://defaultwebsite.com',
    photoUrl: 'https://defaultavatar.com/avatar.jpg',
  },
  {
    userId: '0',
    username: 'SergeHall',
    avatarUrl:
      'https://avatars.githubusercontent.com/u/60080971?s=400&u=142534052d9a95da0103bb0094b44d5202f90a21&v=4',
    email: 'sergehall@example.com',
    isOnline: true,
    lastActive: new Date().toISOString(),
    firstName: 'Serge',
    lastName: 'Hall',
    login: 'emmymax@example.com'.toLowerCase(),
    passwordHash: 'hashedPassword1',
    createdAt: new Date().toISOString(),
    orgId: OrgIdEnums.IT_INCUBATOR,
    roles: [UserRolesEnums.USER, UserRolesEnums.SA],
    isBanned: false,
    banDate: null,
    banReason: null,
    confirmationCode: v4(),
    expirationDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    isConfirmed: false,
    birthday: 'January 31, 1991',
    education: "Bachelor's in Computer Science",
    website: 'https://sergioartg.com',
    photoUrl:
      'https://avatars.githubusercontent.com/u/60080971?s=400&u=142534052d9a95da0103bb0094b44d5202f90a21&v=4',
  },
];

export const addressDataMock: AddressData[] = [
  {
    id: '199',
    userId: '1011',
    street: 'Infinity Loop 99',
    city: 'Cupertino',
    state: 'California',
    postalCode: '95014',
    country: 'USA',
    additionalInfo: 'Near Apple Headquarters',
    coordinates: { latitude: 37.3323, longitude: -122.0312 },
    isResidential: true,
  },
  {
    id: '200',
    userId: '0',
    street: 'Infinity Loop 99',
    city: 'Cupertino',
    state: 'California',
    postalCode: '95014',
    country: 'USA',
    additionalInfo: 'Near Apple Headquarters',
    coordinates: { latitude: 37.3323, longitude: -122.0312 },
    isResidential: true,
  },
  {
    id: '201',
    userId: '1',
    street: 'Algebra Alley 42',
    city: 'Erlangen',
    state: 'Bavaria',
    postalCode: '91054',
    country: 'Germany',
    additionalInfo: 'Close to the university library',
    coordinates: { latitude: 49.589674, longitude: 11.004835 },
    isResidential: true,
  },
  {
    id: '202',
    userId: '2',
    street: 'Silicon Valley Blvd 7',
    city: 'San Jose',
    state: 'California',
    postalCode: '95112',
    country: 'USA',
    additionalInfo: 'Suite 101, next to the coffee shop',
    coordinates: { latitude: 37.7749, longitude: -122.4194 },
    isResidential: false,
  },
  {
    id: '203',
    userId: '3',
    street: 'Mathematics Street 123',
    city: 'Toulouse',
    state: 'Occitanie',
    postalCode: '31000',
    country: 'France',
    additionalInfo: 'Next to the Fermat Museum',
    coordinates: { latitude: 43.604652, longitude: 1.444209 },
    isResidential: true,
  },
  {
    id: '204',
    userId: '4',
    street: 'Ada Avenue 256',
    city: 'London',
    state: 'Greater London',
    postalCode: 'SW1A 1AA',
    country: 'UK',
    additionalInfo: 'Near Ada Lovelace Park',
    coordinates: { latitude: 51.5074, longitude: -0.1278 },
    isResidential: true,
  },
  {
    id: '205',
    userId: '5',
    street: 'Riemann Road 88',
    city: 'Hanover',
    state: 'Lower Saxony',
    postalCode: '30159',
    country: 'Germany',
    additionalInfo: 'Adjacent to Riemann Plaza',
    coordinates: { latitude: 52.3759, longitude: 9.73201 },
    isResidential: true,
  },
  {
    id: '206',
    userId: '6',
    street: 'Kovalevskaya Lane 101',
    city: 'Stockholm',
    state: 'Stockholm County',
    postalCode: '10041',
    country: 'Sweden',
    additionalInfo: 'Near Sofia Kovalevskaya Square',
    coordinates: { latitude: 59.3293, longitude: 18.0686 },
    isResidential: false,
  },
  {
    id: '207',
    userId: '7',
    street: 'Infinity Circle 1729',
    city: 'Madras',
    state: 'Tamil Nadu',
    postalCode: '600003',
    country: 'India',
    additionalInfo: 'Opposite Ramanujan Museum',
    coordinates: { latitude: 13.0827, longitude: 80.2707 },
    isResidential: true,
  },
  {
    id: '208',
    userId: '8',
    street: 'Gaussian Drive 1',
    city: 'Braunschweig',
    state: 'Lower Saxony',
    postalCode: '38100',
    country: 'Germany',
    additionalInfo: 'Near Carl Friedrich Gauss Institute',
    coordinates: { latitude: 52.2692, longitude: 10.5211 },
    isResidential: true,
  },
];

export const cellPhoneDataMock: CellPhoneData[] = [
  {
    id: '100',
    userId: '0',
    number: '3472102222',
    countryCode: '+1',
    nationalNumber: '13472102222',
    region: 'California',
    type: PhoneType.MOBILE,
    isValid: true,
    displayToOthers: true,
  },
  {
    id: '101',
    userId: '1',
    number: '+491751234567',
    countryCode: '+49',
    nationalNumber: '1751234567',
    region: 'Bavaria',
    type: PhoneType.MOBILE,
    isValid: true,
    displayToOthers: true,
  },
  {
    id: '102',
    userId: '2',
    number: '+18004561234',
    countryCode: '+1',
    nationalNumber: '8004561234',
    region: 'California',
    type: PhoneType.LANDLINE,
    isValid: true,
    displayToOthers: true,
  },
  {
    id: '103',
    userId: '3',
    number: '+33678912345',
    countryCode: '+33',
    nationalNumber: '678912345',
    region: 'Occitanie',
    type: PhoneType.MOBILE,
    isValid: true,
    displayToOthers: true,
  },
  {
    id: '104',
    userId: '4',
    number: '+442079876543',
    countryCode: '+44',
    nationalNumber: '2079876543',
    region: 'Greater London',
    type: PhoneType.LANDLINE,
    isValid: true,
    displayToOthers: true,
  },
  {
    id: '105',
    userId: '5',
    number: '+491761234567',
    countryCode: '+49',
    nationalNumber: '1761234567',
    region: 'Lower Saxony',
    type: PhoneType.MOBILE,
    isValid: true,
    displayToOthers: true,
  },
  {
    id: '106',
    userId: '6',
    number: '+46701234567',
    countryCode: '+46',
    nationalNumber: '701234567',
    region: 'Stockholm County',
    type: PhoneType.MOBILE,
    isValid: true,
    displayToOthers: true,
  },
  {
    id: '107',
    userId: '7',
    number: '+919876543210',
    countryCode: '+91',
    nationalNumber: '9876543210',
    region: 'Tamil Nadu',
    type: PhoneType.MOBILE,
    isValid: true,
    displayToOthers: true,
  },
  {
    id: '108',
    userId: '8',
    number: '+495312345678',
    countryCode: '+49',
    nationalNumber: '5312345678',
    region: 'Lower Saxony',
    type: PhoneType.VOIP,
    isValid: true,
    displayToOthers: true,
  },
];
