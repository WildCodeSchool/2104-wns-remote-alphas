import { gql } from '@apollo/client';

const UPDATE_SETTINGS = gql`
  mutation updateSettings($_id: ID!, $newSettings: UpdateUserInput!) {
    updateSettings(userId: { _id: $_id }, newSettings: $newSettings) {
      _id
      name
      firstName
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

export default UPDATE_SETTINGS;
