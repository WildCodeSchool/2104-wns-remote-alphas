import { gql } from "apollo-server-core";

export const GET_COURSES = gql`
  {
    getCourses {
      _id
      courseName
      image_url
      description
      technos
    }
  }
`;
