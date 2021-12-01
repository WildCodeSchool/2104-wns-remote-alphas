import { gql } from "apollo-server-core";

export const GET_USERS = gql`
  {
    getUsers {
      _id
      name
      firstName
      password
      email
      role
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
