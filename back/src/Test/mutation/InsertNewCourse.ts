import { gql } from "apollo-server-core";
export const INSERT_NEW_COURSE = gql`
  mutation {
    addCourse(
      course: {
        courseName: "Test"
        image_url: "https://amazon.s3.com/alphas/test/img"
        description: "here we will dicover how to make tests with jest"
        technos: ["jest", "apollo", "mongoose"]
      }
    ) {
      courseName
      description
      image_url
      technos
      _id
    }
  }
`;
