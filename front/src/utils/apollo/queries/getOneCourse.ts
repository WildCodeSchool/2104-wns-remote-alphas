import { gql } from '@apollo/client';

const GET_ONE_COURSE = gql`
  query getOneCourse($_id: ID!) {
    getCourseById(courseId: { _id: $_id }) {
      _id
      description
      technos
      courseName
      image_url
      postedAt
    }
  }
`;

export default GET_ONE_COURSE;
