import { gql } from "apollo-server-core";

export const INSERT_NEW_USER = gql`
  mutation {
    addUser(
      user: {
        name: "Lefrancois"
        firstName: "Théodore"
        email: "theodore.lefrancois2906@gmail.com"
        password: "you won't know my password"
        location: "Ondres"
        settings: {
          instantChat: true
          pandaTips: true
          colors: { theme: "Dark", customColors: "blue" }
          texts: {
            font: ["arial", "comic"]
            fontWeight: ["bold", "regular"]
            fontSize: 23
            letterSpacing: 1.5
            lineHeight: 2.3
            fontTheme: [3, 5, 2, 6]
          }
          distraction: {
            distractionTheme: ["blue", "white", "red"]
            textNotifications: true
            soundNotifications: true
            animations: true
            readingMode: true
            showTimelineCards: true
            allowDialogs: true
          }
          globalSettings: { shortcuts: ["f4", "cmd+8", "opt+maj+tab"] }
        }
      }
    ) {
      _id
      name
      firstName
      password
      email
      location
      settings {
        instantChat
        pandaTips
        colors {
          theme
          customColors
        }
        texts {
          font
          fontWeight
          fontSize
          letterSpacing
          lineHeight
          fontTheme
        }
        distraction {
          distractionTheme
          textNotifications
          soundNotifications
          animations
          readingMode
          showTimelineCards
          allowDialogs
        }
        globalSettings {
          shortcuts
        }
      }
    }
  }
`;
