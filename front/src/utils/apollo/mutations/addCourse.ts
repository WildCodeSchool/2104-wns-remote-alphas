import { gql } from '@apollo/client';

const ADD_COURSE = gql`
  mutation addCourse(
    $courseName: String!
    $image_url: String!
    $description: String!
    $technos: [String!]
  ) {
    addCourse(
      course: {
        courseName: $courseName
        description: $description
        technos: $technos
        image_url: $image_url
      }
    ) {
      courseName
      description
      technos
      image_url
      _id
      postedAt
    }
  }
`;

export default ADD_COURSE;
