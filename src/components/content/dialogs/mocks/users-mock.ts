export interface User {
    id: number;
    name: string;
    avatar: string;
    email: string;
    isOnline: boolean;
    lastActive: Date;
}


export const users = [
    {
        id: 1,
        name: "Alice",
        avatar: "https://masterpiecer-images.s3.yandex.net/e29101853b7111ee934e1282c0ba7723:upscaled",
        email: "alice@example.com",
        isOnline: true,
        lastActive: new Date(),
    },
    {
        id: 2,
        name: "Bob",
        avatar: "https://i.ytimg.com/vi/ujvaADXPO8E/maxresdefault.jpg",
        email: "bob@example.com",
        isOnline: false,
        lastActive: new Date("2023-12-01T14:30:00"),
    },
    {
        id: 3,
        name: "Charlie",
        avatar: "https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FviktorLitvinImage.9153d6de.webp&w=3840&q=75",
        email: "charlie@example.com",
        isOnline: true,
        lastActive: new Date(),
    },
    {
        id: 4,
        name: "Victoria",
        avatar: "https://masterpiecer-images.s3.yandex.net/718635603a1e11ee861b02c370ea8a2f:upscaled",
        email: "diana@example.com",
        isOnline: false,
        lastActive: new Date("2023-11-30T18:00:00"),
    },
    {
        id: 5,
        name: "Ethan",
        avatar: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/it-kamasutra/Image/c959a045-0eb3-4b46-af08-851e1052e40a_blob",
        email: "ethan@example.com",
        isOnline: true,
        lastActive: new Date(),
    },
    {
        id: 6,
        name: "Fiona",
        avatar: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/it-kamasutra/Image/5d35280f-5521-489a-a372-45efacaf084e_4d2ee26774cf11eeaead5696910b1137_upscaled.jpg",
        email: "fiona@example.com",
        isOnline: false,
        lastActive: new Date("2023-12-01T13:45:00"),
    },
    {
        id: 7,
        name: "George",
        avatar: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/it-kamasutra/Image/18da458e-2abf-433f-9517-2403c0072655_blob",
        email: "george@example.com",
        isOnline: true,
        lastActive: new Date(),
    },
    {
        id: 8,
        name: "Hannah",
        avatar: "https://it-incubator.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage2.62ba1cb6.webp&w=3840&q=75",
        email: "hannah@example.com",
        isOnline: false,
        lastActive: new Date("2023-12-01T10:15:00"),
    },
];
