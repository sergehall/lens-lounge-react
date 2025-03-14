export interface Message {
    id: number;
    myId: number;
    userId: number;
    fromMe: boolean;
    createdAt: string;
    updatedAt: string;
    read: boolean;
    message: string;
    isBanned: boolean;
    banDate: string | null;
    banReason: string | null;
}

export const allMessagesMock: Message[] = [
    // Messages with Emmy
    {
        id: 1,
        myId: 0,
        userId: 1,
        fromMe: false,
        read: true,
        message: "Hi there! 👋",
        createdAt: new Date("2023-12-01T10:00:00").toISOString(),
        updatedAt: new Date("2023-12-01T10:00:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 2,
        myId: 0,
        userId: 1,
        fromMe: true,
        read: true,
        message: "Hello Emmy! How's it going? 😊",
        createdAt: new Date("2023-12-01T10:01:00").toISOString(),
        updatedAt: new Date("2023-12-01T10:01:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 3,
        myId: 0,
        userId: 1,
        fromMe: false,
        read: true,
        message: "Great! I'm prepping for the holidays 🎄. You?",
        createdAt: new Date("2023-12-01T10:02:00").toISOString(),
        updatedAt: new Date("2023-12-01T10:02:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 4,
        myId: 0,
        userId: 1,
        fromMe: true,
        read: true,
        message: "Same here! Can't wait to relax 😌.",
        createdAt: new Date("2023-12-01T10:03:00").toISOString(),
        updatedAt: new Date("2023-12-01T10:03:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 5,
        myId: 0,
        userId: 1,
        fromMe: false,
        read: true,
        message: "What are your holiday plans? 🛤️",
        createdAt: new Date("2023-12-01T10:04:00").toISOString(),
        updatedAt: new Date("2023-12-01T10:04:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 6,
        myId: 0,
        userId: 1,
        fromMe: true,
        read: true,
        message: "Visiting family, lots of food 🍲.",
        createdAt: new Date("2023-12-01T10:05:00").toISOString(),
        updatedAt: new Date("2023-12-01T10:05:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 7,
        myId: 0,
        userId: 1,
        fromMe: false,
        read: true,
        message: "Yum! Send me some recipes! 🍰",
        createdAt: new Date("2023-12-01T10:06:00").toISOString(),
        updatedAt: new Date("2023-12-01T10:06:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 8,
        myId: 0,
        userId: 1,
        fromMe: true,
        read: true,
        message: "Will do! What about you?",
        createdAt: new Date("2023-12-01T10:07:00").toISOString(),
        updatedAt: new Date("2023-12-01T10:07:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 9,
        myId: 0,
        userId: 1,
        fromMe: false,
        read: true,
        message: "Maybe a snowy hike ❄️.",
        createdAt: new Date("2023-12-01T10:08:00").toISOString(),
        updatedAt: new Date("2023-12-01T10:08:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 10,
        myId: 0,
        userId: 1,
        fromMe: true,
        read: true,
        message: "Sounds magical. Have fun! ✨",
        createdAt: new Date("2023-12-01T10:09:00").toISOString(),
        updatedAt: new Date("2023-12-01T10:09:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },

    // Messages with Bob1618
    {
        id: 11,
        myId: 0,
        userId: 2,
        fromMe: false,
        read: true,
        message: "Hey! 🍻",
        createdAt: new Date("2023-12-01T09:00:00").toISOString(),
        updatedAt: new Date("2023-12-01T09:00:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 12,
        myId: 0,
        userId: 2,
        fromMe: true,
        read: true,
        message: "Bob1618! What's up? 😎",
        createdAt: new Date("2023-12-01T09:01:00").toISOString(),
        updatedAt: new Date("2023-12-01T09:01:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 13,
        myId: 0,
        userId: 2,
        fromMe: false,
        read: true,
        message: "Not much. Just chilling with Netflix 🍿.",
        createdAt: new Date("2023-12-01T09:02:00").toISOString(),
        updatedAt: new Date("2023-12-01T09:02:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 14,
        myId: 0,
        userId: 2,
        fromMe: true,
        read: true,
        message: "Nice! What are you watching? 📺",
        createdAt: new Date("2023-12-01T09:03:00").toISOString(),
        updatedAt: new Date("2023-12-01T09:03:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 15,
        myId: 0,
        userId: 2,
        fromMe: false,
        read: true,
        message: "The latest season of that fantasy show 🐉.",
        createdAt: new Date("2023-12-01T09:04:00").toISOString(),
        updatedAt: new Date("2023-12-01T09:04:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 16,
        myId: 0,
        userId: 2,
        fromMe: true,
        read: true,
        message: "Oh cool! Is it worth the hype? 🤔",
        createdAt: new Date("2023-12-01T09:05:00").toISOString(),
        updatedAt: new Date("2023-12-01T09:05:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 17,
        myId: 0,
        userId: 2,
        fromMe: false,
        read: true,
        message: "Totally! You'd love it!",
        createdAt: new Date("2023-12-01T09:06:00").toISOString(),
        updatedAt: new Date("2023-12-01T09:06:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 18,
        myId: 0,
        userId: 2,
        fromMe: true,
        read: true,
        message: "Adding it to my list. Thanks! 🎥",
        createdAt: new Date("2023-12-01T09:07:00").toISOString(),
        updatedAt: new Date("2023-12-01T09:07:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 19,
        myId: 0,
        userId: 2,
        fromMe: false,
        read: true,
        message: "Let me know what you think! 🍿",
        createdAt: new Date("2023-12-01T09:08:00").toISOString(),
        updatedAt: new Date("2023-12-01T09:08:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 20,
        myId: 0,
        userId: 2,
        fromMe: true,
        read: true,
        message: "Will do, Bob1618! Later! 👋",
        createdAt: new Date("2023-12-01T09:09:00").toISOString(),
        updatedAt: new Date("2023-12-01T09:09:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    // Messages with Ada - Thoughtful and motivational
    {
        id: 21,
        myId: 0,
        userId: 4,
        fromMe: true,
        read: true,
        message: "Hey Ada! 🌼",
        createdAt: new Date("2023-12-01T08:00:00").toISOString(),
        updatedAt: new Date("2023-12-01T08:00:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 22,
        myId: 0,
        userId: 4,
        fromMe: false,
        read: true,
        message: "Hi! How's your morning? ☀️",
        createdAt: new Date("2023-12-01T08:05:00").toISOString(),
        updatedAt: new Date("2023-12-01T08:05:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 23,
        myId: 0,
        userId: 4,
        fromMe: true,
        read: true,
        message: "Pretty good. Just had coffee ☕.",
        createdAt: new Date("2023-12-01T08:10:00").toISOString(),
        updatedAt: new Date("2023-12-01T08:10:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 24,
        myId: 0,
        userId: 4,
        fromMe: false,
        read: true,
        message: "Nice! Planning anything productive today? 📝",
        createdAt: new Date("2023-12-01T08:15:00").toISOString(),
        updatedAt: new Date("2023-12-01T08:15:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 25,
        myId: 0,
        userId: 4,
        fromMe: true,
        read: true,
        message: "Yeah, finishing up a side project! 🚀",
        createdAt: new Date("2023-12-01T08:20:00").toISOString(),
        updatedAt: new Date("2023-12-01T08:20:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 26,
        myId: 0,
        userId: 4,
        fromMe: false,
        read: true,
        message: "That's inspiring! Go crush it! 💪",
        createdAt: new Date("2023-12-01T08:25:00").toISOString(),
        updatedAt: new Date("2023-12-01T08:25:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 27,
        myId: 0,
        userId: 4,
        fromMe: true,
        read: true,
        message: "Thank you! Appreciate the motivation. 🙏",
        createdAt: new Date("2023-12-01T08:30:00").toISOString(),
        updatedAt: new Date("2023-12-01T08:30:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 28,
        myId: 0,
        userId: 4,
        fromMe: false,
        read: true,
        message: "Always here to cheer you on! 🎉",
        createdAt: new Date("2023-12-01T08:35:00").toISOString(),
        updatedAt: new Date("2023-12-01T08:35:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 29,
        myId: 0,
        userId: 4,
        fromMe: true,
        read: true,
        message: "You're the best. Have an awesome day! 🌈",
        createdAt: new Date("2023-12-01T08:40:00").toISOString(),
        updatedAt: new Date("2023-12-01T08:40:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 30,
        myId: 0,
        userId: 4,
        fromMe: false,
        read: true,
        message: "You too! 🦋",
        createdAt: new Date("2023-12-01T08:45:00").toISOString(),
        updatedAt: new Date("2023-12-01T08:45:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
// Messages with Bernhard - The adventurer
    {
        id: 31,
        myId: 0,
        userId: 5,
        fromMe: true,
        read: true,
        message: "Hey Bernhard! 🏔️",
        createdAt: new Date("2023-12-01T07:00:00").toISOString(),
        updatedAt: new Date("2023-12-01T07:00:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 32,
        myId: 0,
        userId: 5,
        fromMe: false,
        read: true,
        message: "Hey there! Just back from a hike. 🥾",
        createdAt: new Date("2023-12-01T07:05:00").toISOString(),
        updatedAt: new Date("2023-12-01T07:05:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 33,
        myId: 0,
        userId: 5,
        fromMe: true,
        read: true,
        message: "Another hike? You're unstoppable! 😄",
        createdAt: new Date("2023-12-01T07:10:00").toISOString(),
        updatedAt: new Date("2023-12-01T07:10:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 34,
        myId: 0,
        userId: 5,
        fromMe: false,
        read: true,
        message: "Haha, the mountains are calling. 🏞️",
        createdAt: new Date("2023-12-01T07:15:00").toISOString(),
        updatedAt: new Date("2023-12-01T07:15:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 35,
        myId: 0,
        userId: 5,
        fromMe: true,
        read: true,
        message: "Sounds epic! Share some pics. 📸",
        createdAt: new Date("2023-12-01T07:20:00").toISOString(),
        updatedAt: new Date("2023-12-01T07:20:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 36,
        myId: 0,
        userId: 5,
        fromMe: false,
        read: true,
        message: "Sure! Check this out. 🐾",
        createdAt: new Date("2023-12-01T07:25:00").toISOString(),
        updatedAt: new Date("2023-12-01T07:25:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 37,
        myId: 0,
        userId: 5,
        fromMe: true,
        read: true,
        message: "Wow! That's breathtaking. 🏔️",
        createdAt: new Date("2023-12-01T07:30:00").toISOString(),
        updatedAt: new Date("2023-12-01T07:30:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 38,
        myId: 0,
        userId: 5,
        fromMe: false,
        read: true,
        message: "You should join me next time. 💪",
        createdAt: new Date("2023-12-01T07:35:00").toISOString(),
        updatedAt: new Date("2023-12-01T07:35:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 39,
        myId: 0,
        userId: 5,
        fromMe: true,
        read: true,
        message: "Deal! Let's plan something soon. 🌄",
        createdAt: new Date("2023-12-01T07:40:00").toISOString(),
        updatedAt: new Date("2023-12-01T07:40:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 40,
        myId: 0,
        userId: 5,
        fromMe: false,
        read: true,
        message: "Looking forward to it! 🗻",
        createdAt: new Date("2023-12-01T07:45:00").toISOString(),
        updatedAt: new Date("2023-12-01T07:45:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },

// Messages with Sofia - The foodie
    {
        id: 41,
        myId: 0,
        userId: 6,
        fromMe: true,
        read: true,
        message: "Hi Sofia! 🍴",
        createdAt: new Date("2023-12-01T13:00:00").toISOString(),
        updatedAt: new Date("2023-12-01T13:00:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 42,
        myId: 0,
        userId: 6,
        fromMe: false,
        read: true,
        message: "Hey! Have you tried the new bistro? 🍝",
        createdAt: new Date("2023-12-01T13:05:00").toISOString(),
        updatedAt: new Date("2023-12-01T13:05:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 43,
        myId: 0,
        userId: 6,
        fromMe: true,
        read: true,
        message: "Not yet. Is it worth it? 🍽️",
        createdAt: new Date("2023-12-01T13:10:00").toISOString(),
        updatedAt: new Date("2023-12-01T13:10:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 44,
        myId: 0,
        userId: 6,
        fromMe: false,
        read: true,
        message: "Absolutely! Their lasagna is heavenly. 😋",
        createdAt: new Date("2023-12-01T13:15:00").toISOString(),
        updatedAt: new Date("2023-12-01T13:15:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 45,
        myId: 0,
        userId: 6,
        fromMe: true,
        read: true,
        message: "You've sold me. I'll check it out. 🛵",
        createdAt: new Date("2023-12-01T13:20:00").toISOString(),
        updatedAt: new Date("2023-12-01T13:20:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 46,
        myId: 0,
        userId: 6,
        fromMe: false,
        read: true,
        message: "Let me know what you think! 🍷",
        createdAt: new Date("2023-12-01T13:25:00").toISOString(),
        updatedAt: new Date("2023-12-01T13:25:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 47,
        myId: 0,
        userId: 6,
        fromMe: true,
        read: true,
        message: "Will do. Any dessert recommendations? 🍰",
        createdAt: new Date("2023-12-01T13:30:00").toISOString(),
        updatedAt: new Date("2023-12-01T13:30:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 48,
        myId: 0,
        userId: 6,
        fromMe: false,
        read: true,
        message: "Try the tiramisu. It's divine! ☕",
        createdAt: new Date("2023-12-01T13:35:00").toISOString(),
        updatedAt: new Date("2023-12-01T13:35:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 49,
        myId: 0,
        userId: 6,
        fromMe: true,
        read: true,
        message: "Thanks, Sofia! You're the best. 💕",
        createdAt: new Date("2023-12-01T13:40:00").toISOString(),
        updatedAt: new Date("2023-12-01T13:40:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 50,
        myId: 0,
        userId: 6,
        fromMe: false,
        read: true,
        message: "Anytime! Happy feasting! 🎉",
        createdAt: new Date("2023-12-01T13:45:00").toISOString(),
        updatedAt: new Date("2023-12-01T13:45:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },

// Messages with Pierre - The bookworm
    {
        id: 51,
        myId: 0,
        userId: 3,
        fromMe: true,
        read: true,
        message: "Hey Pierre! 📚",
        createdAt: new Date("2023-12-01T14:00:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:00:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 52,
        myId: 0,
        userId: 3,
        fromMe: false,
        read: true,
        message: "Hey! Found a new book for you. 📖",
        createdAt: new Date("2023-12-01T14:05:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:05:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 53,
        myId: 0,
        userId: 3,
        fromMe: true,
        read: true,
        message: "Oh? What's it about? 🧐",
        createdAt: new Date("2023-12-01T14:10:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:10:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 54,
        myId: 0,
        userId: 3,
        fromMe: false,
        read: true,
        message: "It's a mystery thriller with a twist! 🕵️",
        createdAt: new Date("2023-12-01T14:15:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:15:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 55,
        myId: 0,
        userId: 3,
        fromMe: true,
        read: true,
        message: "Sounds intriguing! Title? 📚",
        createdAt: new Date("2023-12-01T14:20:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:20:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 56,
        myId: 0,
        userId: 3,
        fromMe: false,
        read: true,
        message: "It's called 'The Silent Watcher'. 🌌",
        createdAt: new Date("2023-12-01T14:25:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:25:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 57,
        myId: 0,
        userId: 3,
        fromMe: true,
        read: true,
        message: "Adding it to my list. Thanks, Pierre! 🖋️",
        createdAt: new Date("2023-12-01T14:30:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:30:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 58,
        myId: 0,
        userId: 3,
        fromMe: false,
        read: true,
        message: "Let me know how you like it! 🤓",
        createdAt: new Date("2023-12-01T14:35:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:35:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 59,
        myId: 0,
        userId: 3,
        fromMe: true,
        read: true,
        message: "Will do. Thanks for the rec! 🙌",
        createdAt: new Date("2023-12-01T14:40:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:40:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    // Messages with Gauss - The Mathematician
    {
        id: 60,
        myId: 0,
        userId: 3,
        fromMe: false,
        read: true,
        message: "Enjoy the read! 📖",
        createdAt: new Date("2023-12-01T14:45:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:45:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 61,
        myId: 0,
        userId: 8,
        fromMe: true,
        read: true,
        message: "Hey Gauss! 🎨",
        createdAt: new Date("2023-12-01T15:00:00").toISOString(),
        updatedAt: new Date("2023-12-01T15:00:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 62,
        myId: 0,
        userId: 8,
        fromMe: false,
        read: true,
        message: "Hi! Just finished a new painting! 🎨",
        createdAt: new Date("2023-12-01T15:05:00").toISOString(),
        updatedAt: new Date("2023-12-01T15:05:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 63,
        myId: 0,
        userId: 8,
        fromMe: true,
        read: true,
        message: "That's awesome! Can I see it? 🖼️",
        createdAt: new Date("2023-12-01T15:10:00").toISOString(),
        updatedAt: new Date("2023-12-01T15:10:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 64,
        myId: 0,
        userId: 8,
        fromMe: false,
        read: true,
        message: "Sure! Sending a pic. 📷",
        createdAt: new Date("2023-12-01T15:15:00").toISOString(),
        updatedAt: new Date("2023-12-01T15:15:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 65,
        myId: 0,
        userId: 8,
        fromMe: true,
        read: true,
        message: "Wow! It's stunning. So much talent! 🌟",
        createdAt: new Date("2023-12-01T15:20:00").toISOString(),
        updatedAt: new Date("2023-12-01T15:20:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 66,
        myId: 0,
        userId: 8,
        fromMe: false,
        read: true,
        message: "Thank you! It means a lot. 🥰",
        createdAt: new Date("2023-12-01T15:25:00").toISOString(),
        updatedAt: new Date("2023-12-01T15:25:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 67,
        myId: 0,
        userId: 8,
        fromMe: true,
        read: true,
        message: "What's next on your canvas? 🖌️",
        createdAt: new Date("2023-12-01T15:30:00").toISOString(),
        updatedAt: new Date("2023-12-01T15:30:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 68,
        myId: 0,
        userId: 8,
        fromMe: false,
        read: true,
        message: "Maybe a sunset. Feeling inspired. 🌅",
        createdAt: new Date("2023-12-01T15:35:00").toISOString(),
        updatedAt: new Date("2023-12-01T15:35:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 69,
        myId: 0,
        userId: 8,
        fromMe: true,
        read: true,
        message: "Can't wait to see it! Keep creating! 🌈",
        createdAt: new Date("2023-12-01T15:40:00").toISOString(),
        updatedAt: new Date("2023-12-01T15:40:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },

    {
        id: 70,
        myId: 0,
        userId: 8,
        fromMe: false,
        read: true,
        message: "Will do. Thanks for the support! 💖",
        createdAt: new Date("2023-12-01T15:45:00").toISOString(),
        updatedAt: new Date("2023-12-01T15:45:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    // Messages with Ramanujan - The Bookworm
    {
        id: 71,
        myId: 0,
        userId: 7,
        fromMe: true,
        read: true,
        message: "Hey Ramanujan! 📚",
        createdAt: new Date("2023-12-01T14:00:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:00:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 72,
        myId: 0,
        userId: 7,
        fromMe: false,
        read: true,
        message: "Hey! Found a new book for you. 📖",
        createdAt: new Date("2023-12-01T14:05:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:05:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 73,
        myId: 0,
        userId: 7,
        fromMe: true,
        read: true,
        message: "Oh? What's it about? 🧐",
        createdAt: new Date("2023-12-01T14:10:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:10:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 74,
        myId: 0,
        userId: 7,
        fromMe: false,
        read: true,
        message: "It's a mystery thriller with a twist! 🕵️",
        createdAt: new Date("2023-12-01T14:15:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:15:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 75,
        myId: 0,
        userId: 7,
        fromMe: true,
        read: true,
        message: "Sounds intriguing! Title? 📚",
        createdAt: new Date("2023-12-01T14:20:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:20:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 76,
        myId: 0,
        userId: 7,
        fromMe: false,
        read: true,
        message: "It's called 'The Silent Watcher'. 🌌",
        createdAt: new Date("2023-12-01T14:25:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:25:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 77,
        myId: 0,
        userId: 7,
        fromMe: true,
        read: true,
        message: "Adding it to my list. Thanks, Ramanujan! 🖋️",
        createdAt: new Date("2023-12-01T14:30:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:30:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 78,
        myId: 0,
        userId: 7,
        fromMe: false,
        read: true,
        message: "Let me know how you like it! 🤓",
        createdAt: new Date("2023-12-01T14:35:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:35:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 79,
        myId: 0,
        userId: 7,
        fromMe: true,
        read: true,
        message: "Will do. Thanks for the rec! 🙌",
        createdAt: new Date("2023-12-01T14:40:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:40:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },
    {
        id: 80,
        myId: 0,
        userId: 7,
        fromMe: false,
        read: true,
        message: "Enjoy the read! 📖",
        createdAt: new Date("2023-12-01T14:45:00").toISOString(),
        updatedAt: new Date("2023-12-01T14:45:00").toISOString(),
        isBanned: false,
        banDate: null,
        banReason: null,
    },


];


export const fetchMessagesByUserIds = (myId: number, userId: number, allMessages: Message[]): Message[] => {
    return allMessages.filter(
        (message) => (message.myId === myId && message.userId === userId) || (message.myId === userId && message.userId === myId)
    );
};