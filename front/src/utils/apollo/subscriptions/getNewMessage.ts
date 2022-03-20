import { gql } from '@apollo/client';

const GET_NEW_MESSAGE = gql`
  subscription {
    newMessage {
      _id
      author {
        _id
        firstName
      }
      text
      sentAt
    }
  }
`;

export default GET_NEW_MESSAGE;
