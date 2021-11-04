import { gql } from "apollo-server-core";

export const INSERT_NEW_USER = gql`
  mutation {
    signup(
      user: {
        name: "Lefrancois"
        firstName: "Théodore"
        email: "theodore.lefrancois2906@gmail.com"
        password: "password"
      }
    ) {
      _id
      name
      firstName
      password
      email
    }
  }
`;
