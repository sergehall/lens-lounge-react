
export interface Message {
    id: number;
    myId: number;
    userId: number;
    text: string;
    fromMe: boolean;
    timestamp: Date;
    read: boolean;
}

export const allMessages: Message[] = [
    // Messages with Alice
    { id: 1, myId: 0, userId: 1, text: "Hi there! 👋", fromMe: false, timestamp: new Date("2023-12-01T10:00:00"), read: true },
    { id: 2, myId: 0, userId: 1, text: "Hello Alice! How's it going? 😊", fromMe: true, timestamp: new Date("2023-12-01T10:01:00"), read: true },
    { id: 3, myId: 0, userId: 1, text: "Great! I'm prepping for the holidays 🎄. You?", fromMe: false, timestamp: new Date("2023-12-01T10:02:00"), read: true },
    { id: 4, myId: 0, userId: 1, text: "Same here! Can't wait to relax 😌.", fromMe: true, timestamp: new Date("2023-12-01T10:03:00"), read: true },
    { id: 5, myId: 0, userId: 1, text: "What are your holiday plans? 🛤️", fromMe: false, timestamp: new Date("2023-12-01T10:04:00"), read: true },
    { id: 6, myId: 0, userId: 1, text: "Visiting family, lots of food 🍲.", fromMe: true, timestamp: new Date("2023-12-01T10:05:00"), read: true },
    { id: 7, myId: 0, userId: 1, text: "Yum! Send me some recipes! 🍰", fromMe: false, timestamp: new Date("2023-12-01T10:06:00"), read: true },
    { id: 8, myId: 0, userId: 1, text: "Will do! What about you?", fromMe: true, timestamp: new Date("2023-12-01T10:07:00"), read: true },
    { id: 9, myId: 0, userId: 1, text: "Maybe a snowy hike ❄️.", fromMe: false, timestamp: new Date("2023-12-01T10:08:00"), read: true },
    { id: 10, myId: 0, userId: 1, text: "Sounds magical. Have fun! ✨", fromMe: true, timestamp: new Date("2023-12-01T10:09:00"), read: true },

    // Messages with Bob
    { id: 11, myId: 0, userId: 2, text: "Hey! 🍻", fromMe: false, timestamp: new Date("2023-12-01T09:00:00"), read: true },
    { id: 12, myId: 0, userId: 2, text: "Bob! What's up? 😎", fromMe: true, timestamp: new Date("2023-12-01T09:01:00"), read: true },
    { id: 13, myId: 0, userId: 2, text: "Not much. Just chilling with Netflix 🍿.", fromMe: false, timestamp: new Date("2023-12-01T09:02:00"), read: true },
    { id: 14, myId: 0, userId: 2, text: "Nice! What are you watching? 📺", fromMe: true, timestamp: new Date("2023-12-01T09:03:00"), read: true },
    { id: 15, myId: 0, userId: 2, text: "The latest season of that fantasy show 🐉.", fromMe: false, timestamp: new Date("2023-12-01T09:04:00"), read: true },
    { id: 16, myId: 0, userId: 2, text: "Oh cool! Is it worth the hype? 🤔", fromMe: true, timestamp: new Date("2023-12-01T09:05:00"), read: true },
    { id: 17, myId: 0, userId: 2, text: "Totally! You'd love it!", fromMe: false, timestamp: new Date("2023-12-01T09:06:00"), read: true },
    { id: 18, myId: 0, userId: 2, text: "Adding it to my list. Thanks! 🎥", fromMe: true, timestamp: new Date("2023-12-01T09:07:00"), read: true },
    { id: 19, myId: 0, userId: 2, text: "Let me know what you think! 🍿", fromMe: false, timestamp: new Date("2023-12-01T09:08:00"), read: true },
    { id: 20, myId: 0, userId: 2, text: "Will do, Bob! Later! 👋", fromMe: true, timestamp: new Date("2023-12-01T09:09:00"), read: true },

    // Messages with Charlie - The bookworm
    { id: 51, myId: 0, userId: 3, text: "Hey Charlie! 📚", fromMe: true, timestamp: new Date("2023-12-01T14:00:00"), read: true },
    { id: 52, myId: 0, userId: 3, text: "Hey! Found a new book for you. 📖", fromMe: false, timestamp: new Date("2023-12-01T14:05:00"), read: true },
    { id: 53, myId: 0, userId: 3, text: "Oh? What's it about? 🧐", fromMe: true, timestamp: new Date("2023-12-01T14:10:00"), read: true },
    { id: 54, myId: 0, userId: 3, text: "It's a mystery thriller with a twist! 🕵️", fromMe: false, timestamp: new Date("2023-12-01T14:15:00"), read: true },
    { id: 55, myId: 0, userId: 3, text: "Sounds intriguing! Title? 📚", fromMe: true, timestamp: new Date("2023-12-01T14:20:00"), read: true },
    { id: 56, myId: 0, userId: 3, text: "It's called 'The Silent Watcher'. 🌌", fromMe: false, timestamp: new Date("2023-12-01T14:25:00"), read: true },
    { id: 57, myId: 0, userId: 3, text: "Adding it to my list. Thanks, Charlie! 🖋️", fromMe: true, timestamp: new Date("2023-12-01T14:30:00"), read: true },
    { id: 58, myId: 0, userId: 3, text: "Let me know how you like it! 🤓", fromMe: false, timestamp: new Date("2023-12-01T14:35:00"), read: true },
    { id: 59, myId: 0, userId: 3, text: "Will do. Thanks for the rec! 🙌", fromMe: true, timestamp: new Date("2023-12-01T14:40:00"), read: true },
    { id: 60, myId: 0, userId: 3, text: "Enjoy the read! 📖", fromMe: false, timestamp: new Date("2023-12-01T14:45:00"), read: true },

    // Messages with Diana - Thoughtful and motivational
    { id: 21, myId: 0, userId: 4, text: "Hey Diana! 🌼", fromMe: true, timestamp: new Date("2023-12-01T08:00:00"), read: true },
    { id: 22, myId: 0, userId: 4, text: "Hi! How's your morning? ☀️", fromMe: false, timestamp: new Date("2023-12-01T08:05:00"), read: true },
    { id: 23, myId: 0, userId: 4, text: "Pretty good. Just had coffee ☕.", fromMe: true, timestamp: new Date("2023-12-01T08:10:00"), read: true },
    { id: 24, myId: 0, userId: 4, text: "Nice! Planning anything productive today? 📝", fromMe: false, timestamp: new Date("2023-12-01T08:15:00"), read: true },
    { id: 25, myId: 0, userId: 4, text: "Yeah, finishing up a side project! 🚀", fromMe: true, timestamp: new Date("2023-12-01T08:20:00"), read: true },
    { id: 26, myId: 0, userId: 4, text: "That's inspiring! Go crush it! 💪", fromMe: false, timestamp: new Date("2023-12-01T08:25:00"), read: true },
    { id: 27, myId: 0, userId: 4, text: "Thank you! Appreciate the motivation. 🙏", fromMe: true, timestamp: new Date("2023-12-01T08:30:00"), read: true },
    { id: 28, myId: 0, userId: 4, text: "Always here to cheer you on! 🎉", fromMe: false, timestamp: new Date("2023-12-01T08:35:00"), read: true },
    { id: 29, myId: 0, userId: 4, text: "You're the best. Have an awesome day! 🌈", fromMe: true, timestamp: new Date("2023-12-01T08:40:00"), read: true },
    { id: 30, myId: 0, userId: 4, text: "You too! 🦋", fromMe: false, timestamp: new Date("2023-12-01T08:45:00"), read: true },

    // Messages with Ethan - The adventurer
    { id: 31, myId: 0, userId: 5, text: "Hey Ethan! 🏔️", fromMe: true, timestamp: new Date("2023-12-01T07:00:00"), read: true },
    { id: 32, myId: 0, userId: 5, text: "Hey there! Just back from a hike. 🥾", fromMe: false, timestamp: new Date("2023-12-01T07:05:00"), read: true },
    { id: 33, myId: 0, userId: 5, text: "Another hike? You're unstoppable! 😄", fromMe: true, timestamp: new Date("2023-12-01T07:10:00"), read: true },
    { id: 34, myId: 0, userId: 5, text: "Haha, the mountains are calling. 🏞️", fromMe: false, timestamp: new Date("2023-12-01T07:15:00"), read: true },
    { id: 35, myId: 0, userId: 5, text: "Sounds epic! Share some pics. 📸", fromMe: true, timestamp: new Date("2023-12-01T07:20:00"), read: true },
    { id: 36, myId: 0, userId: 5, text: "Sure! Check this out. 🐾", fromMe: false, timestamp: new Date("2023-12-01T07:25:00"), read: true },
    { id: 37, myId: 0, userId: 5, text: "Wow! That's breathtaking. 🏔️", fromMe: true, timestamp: new Date("2023-12-01T07:30:00"), read: true },
    { id: 38, myId: 0, userId: 5, text: "You should join me next time. 💪", fromMe: false, timestamp: new Date("2023-12-01T07:35:00"), read: true },
    { id: 39, myId: 0, userId: 5, text: "Deal! Let's plan something soon. 🌄", fromMe: true, timestamp: new Date("2023-12-01T07:40:00"), read: true },
    { id: 40, myId: 0, userId: 5, text: "Looking forward to it! 🗻", fromMe: false, timestamp: new Date("2023-12-01T07:45:00"), read: true },

    // Messages with Fiona - The foodie
    { id: 41, myId: 0, userId: 6, text: "Hi Fiona! 🍴", fromMe: true, timestamp: new Date("2023-12-01T13:00:00"), read: true },
    { id: 42, myId: 0, userId: 6, text: "Hey! Have you tried the new bistro? 🍝", fromMe: false, timestamp: new Date("2023-12-01T13:05:00"), read: true },
    { id: 43, myId: 0, userId: 6, text: "Not yet. Is it worth it? 🍽️", fromMe: true, timestamp: new Date("2023-12-01T13:10:00"), read: true },
    { id: 44, myId: 0, userId: 6, text: "Absolutely! Their lasagna is heavenly. 😋", fromMe: false, timestamp: new Date("2023-12-01T13:15:00"), read: true },
    { id: 45, myId: 0, userId: 6, text: "You've sold me. I'll check it out. 🛵", fromMe: true, timestamp: new Date("2023-12-01T13:20:00"), read: true },
    { id: 46, myId: 0, userId: 6, text: "Let me know what you think! 🍷", fromMe: false, timestamp: new Date("2023-12-01T13:25:00"), read: true },
    { id: 47, myId: 0, userId: 6, text: "Will do. Any dessert recommendations? 🍰", fromMe: true, timestamp: new Date("2023-12-01T13:30:00"), read: true },
    { id: 48, myId: 0, userId: 6, text: "Try the tiramisu. It's divine! ☕", fromMe: false, timestamp: new Date("2023-12-01T13:35:00"), read: true },
    { id: 49, myId: 0, userId: 6, text: "Thanks, Fiona! You're the best. 💕", fromMe: true, timestamp: new Date("2023-12-01T13:40:00"), read: true },
    { id: 50, myId: 0, userId: 6, text: "Anytime! Happy feasting! 🎉", fromMe: false, timestamp: new Date("2023-12-01T13:45:00"), read: true },

    // Messages with George - The bookworm
    { id: 51, myId: 0, userId: 7, text: "Hey George! 📚", fromMe: true, timestamp: new Date("2023-12-01T14:00:00"), read: true },
    { id: 52, myId: 0, userId: 7, text: "Hey! Found a new book for you. 📖", fromMe: false, timestamp: new Date("2023-12-01T14:05:00"), read: true },
    { id: 53, myId: 0, userId: 7, text: "Oh? What's it about? 🧐", fromMe: true, timestamp: new Date("2023-12-01T14:10:00"), read: true },
    { id: 54, myId: 0, userId: 7, text: "It's a mystery thriller with a twist! 🕵️", fromMe: false, timestamp: new Date("2023-12-01T14:15:00"), read: true },
    { id: 55, myId: 0, userId: 7, text: "Sounds intriguing! Title? 📚", fromMe: true, timestamp: new Date("2023-12-01T14:20:00"), read: true },
    { id: 56, myId: 0, userId: 7, text: "It's called 'The Silent Watcher'. 🌌", fromMe: false, timestamp: new Date("2023-12-01T14:25:00"), read: true },
    { id: 57, myId: 0, userId: 7, text: "Adding it to my list. Thanks, George! 🖋️", fromMe: true, timestamp: new Date("2023-12-01T14:30:00"), read: true },
    { id: 58, myId: 0, userId: 7, text: "Let me know how you like it! 🤓", fromMe: false, timestamp: new Date("2023-12-01T14:35:00"), read: true },
    { id: 59, myId: 0, userId: 7, text: "Will do. Thanks for the rec! 🙌", fromMe: true, timestamp: new Date("2023-12-01T14:40:00"), read: true },
    { id: 60, myId: 0, userId: 7, text: "Enjoy the read! 📖", fromMe: false, timestamp: new Date("2023-12-01T14:45:00"), read: true },

    // Messages with Hannah - The artist
    { id: 61, myId: 0, userId: 8, text: "Hey Hannah! 🎨", fromMe: true, timestamp: new Date("2023-12-01T15:00:00"), read: true },
    { id: 62, myId: 0, userId: 8, text: "Hi! Just finished a new painting! 🎨", fromMe: false, timestamp: new Date("2023-12-01T15:05:00"), read: true },
    { id: 63, myId: 0, userId: 8, text: "That's awesome! Can I see it? 🖼️", fromMe: true, timestamp: new Date("2023-12-01T15:10:00"), read: true },
    { id: 64, myId: 0, userId: 8, text: "Sure! Sending a pic. 📷", fromMe: false, timestamp: new Date("2023-12-01T15:15:00"), read: true },
    { id: 65, myId: 0, userId: 8, text: "Wow! It's stunning. So much talent! 🌟", fromMe: true, timestamp: new Date("2023-12-01T15:20:00"), read: true },
    { id: 66, myId: 0, userId: 8, text: "Thank you! It means a lot. 🥰", fromMe: false, timestamp: new Date("2023-12-01T15:25:00"), read: true },
    { id: 67, myId: 0, userId: 8, text: "What's next on your canvas? 🖌️", fromMe: true, timestamp: new Date("2023-12-01T15:30:00"), read: true },
    { id: 68, myId: 0, userId: 8, text: "Maybe a sunset. Feeling inspired. 🌅", fromMe: false, timestamp: new Date("2023-12-01T15:35:00"), read: true },
    { id: 69, myId: 0, userId: 8, text: "Can't wait to see it! Keep creating! 🌈", fromMe: true, timestamp: new Date("2023-12-01T15:40:00"), read: true },
    { id: 70, myId: 0, userId: 8, text: "Will do. Thanks for the support! 💖", fromMe: false, timestamp: new Date("2023-12-01T15:45:00"), read: true },
];


export const fetchMessagesByUserIds = (myId: number, userId: number, allMessages: Message[]): Message[] => {
    return allMessages.filter(
        (message) => (message.myId === myId && message.userId === userId) || (message.myId === userId && message.userId === myId)
    );
};