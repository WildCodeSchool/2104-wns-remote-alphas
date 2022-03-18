import { gql } from '@apollo/client';

const UPDATE_ROLE = gql`
  mutation updateRole($_id: ID!, $role: String!) {
    updateRole(userId: { _id: $_id }, newRole: { role: $role }) {
      _id
      role
      location
      name
      firstName
    }
  }
`;

export default UPDATE_ROLE;
