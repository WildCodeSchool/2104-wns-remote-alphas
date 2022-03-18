import { gql } from '@apollo/client';

const POST_MESSAGE = gql`
  mutation postMessage($message: String!) {
    postMessage(message: $message) {
      _id
      text
      author {
        _id
        firstName
      }
      sentAt
    }
  }
`;

export default POST_MESSAGE;
