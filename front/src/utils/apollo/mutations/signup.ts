import { gql } from '@apollo/client';

const SIGNUP = gql`
  mutation signup(
    $name: String!
    $email: String!
    $firstName: String!
    $password: String!
    $roles: [String!]!
  ) {
    signup(
      user: {
        name: $name
        email: $email
        firstName: $firstName
        password: $password
        roles: $roles
      }
    ) {
      _id
    }
  }
`;

export default SIGNUP;
