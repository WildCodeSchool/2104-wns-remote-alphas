import { gql } from '@apollo/client';

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(userInput: { email: $email, password: $password })
  }
`;

export default LOGIN;
