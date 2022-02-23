import { gql } from '@apollo/client';

const DELETE_ONE_COURSE = gql`
  mutation deleteOneCourse($_id: ID!) {
    deleteOneCourse(courseId: { _id: $_id }) {
      _id
      message
    }
  }
`;

export default DELETE_ONE_COURSE;
