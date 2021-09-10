const { ObjectID: ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');

module.exports = [
    {
        _id: ObjectId(),
        name: "Lefrancois",
        firstName: "Théodore",
        email: "theodore.lefrancois2906@gmail.com",
        password: bcrypt.hashSync("password", 10),
        location: "Ondres",
        expoPushToken: "ExponentPushToken[5kLAKlO6LTBh_OUumzMSN7]",
        settings: {
            instantChat: true,
            pandaTips: true,
            colors: { theme: "Dark", customColors: "blue" },
            texts: {
                font: ["arial", "comic"],
                fontWeight: ["bold", "regular"],
                fontSize: 23,
                letterSpacing: 1.5,
                lineHeight: 2.3,
                fontTheme: [3, 5, 2, 6]
            },
            distraction: {
                distractionTheme: ["blue", "white", "red"],
                textNotifications: true,
                soundNotifications: true,
                animations: true,
                readingMode: true,
                showTimelineCards: true,
                allowDialogs: true
            },
            globalSettings: { shortcuts: ["f4", "cmd+8", "opt+maj+tab"] }
        }
    },
    {
        _id: ObjectId(),
        name: "Houis",
        firstName: "Ameline",
        email: "ameline@gmail.com",
        password: bcrypt.hashSync("password", 10),
        location: "Brittany",
        expoPushToken: "",
        settings: {
            instantChat: true,
            pandaTips: true,
            colors: { theme: "Dark", customColors: "blue" },
            texts: {
                font: ["arial", "comic"],
                fontWeight: ["bold", "regular"],
                fontSize: 23,
                letterSpacing: 1.5,
                lineHeight: 2.3,
                fontTheme: [3, 5, 2, 6]
            },
            distraction: {
                distractionTheme: ["blue", "white", "red"],
                textNotifications: true,
                soundNotifications: true,
                animations: true,
                readingMode: true,
                showTimelineCards: true,
                allowDialogs: true
            },
            globalSettings: { shortcuts: ["f4", "cmd+8", "opt+maj+tab"] }
        }
    },
    {
        _id: ObjectId(),
        name: "Verges",
        firstName: "Anthony",
        email: "verges_anthony@hotmail.fr",
        password: bcrypt.hashSync("password", 10),
        location: "France",
        expoPushToken: "",
        settings: {
            instantChat: true,
            pandaTips: true,
            colors: { theme: "Dark", customColors: "blue" },
            texts: {
                font: ["arial", "comic"],
                fontWeight: ["bold", "regular"],
                fontSize: 23,
                letterSpacing: 1.5,
                lineHeight: 2.3,
                fontTheme: [3, 5, 2, 6]
            },
            distraction: {
                distractionTheme: ["blue", "white", "red"],
                textNotifications: true,
                soundNotifications: true,
                animations: true,
                readingMode: true,
                showTimelineCards: true,
                allowDialogs: true
            },
            globalSettings: { shortcuts: ["f4", "cmd+8", "opt+maj+tab"] }
        }
    },
    {
        _id: ObjectId(),
        name: "Palma",
        firstName: "Alex",
        email: "elya29@protonmail.com",
        password: bcrypt.hashSync("password", 10),
        location: "Brittany",
        expoPushToken: "ExponentPushToken[5kLAKlO6LTBh_OUumzMSN7]",
        settings: {
            instantChat: true,
            pandaTips: true,
            colors: { theme: "Dark", customColors: "blue" },
            texts: {
                font: ["arial", "comic"],
                fontWeight: ["bold", "regular"],
                fontSize: 23,
                letterSpacing: 1.5,
                lineHeight: 2.3,
                fontTheme: [3, 5, 2, 6]
            },
            distraction: {
                distractionTheme: ["blue", "white", "red"],
                textNotifications: true,
                soundNotifications: true,
                animations: true,
                readingMode: true,
                showTimelineCards: true,
                allowDialogs: true
            },
            globalSettings: { shortcuts: ["f4", "cmd+8", "opt+maj+tab"] }
        }
    },
];