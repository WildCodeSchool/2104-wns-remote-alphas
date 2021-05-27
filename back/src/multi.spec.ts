// import "reflect-metadata";
// import { gql } from "apollo-server-core";
// import mongoose from "mongoose";
// import { ApolloServer } from "apollo-server";
// import { buildSchema } from "type-graphql";
// import { MongoMemoryServer } from "mongodb-memory-server";
// import { CourseResolver } from "./Resolvers/CourseResolver";
// const { createTestClient } = require("apollo-server-testing");

// interface courseInput {
//   courseName?: string;
//   image_url?: string;
//   description?: string;
//   technos?: string[];
// }
// function InsertNewCourse({
//   courseName,
//   image_url,
//   description,
//   technos,
// }: courseInput) {
//   const newCourse = gql`
//     mutation {
//       addCourse(
//         course: {
//           courseName: ${courseName}
//           image_url: ${image_url}
//           description: ${description}
//           technos: ${technos}
//         }
//       ) {
//         courseName
//         description
//         image_url
//         technos
//         _id
//       }
//     }
//   `;
//   return newCourse;
// }

// describe("Tests for the back", () => {
//   let apollo: ApolloServer | null = null;
//   let mongo: MongoMemoryServer = new MongoMemoryServer();

//   beforeAll(async () => {
//     mongo = new MongoMemoryServer();
//     const uri = await mongo.getUri();

//     const initApolloServer = async () => {
//       await mongoose.connect(uri, {
//         useCreateIndex: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         autoIndex: true,
//       });
//       const schema = await buildSchema({ resolvers: [CourseResolver] });
//       const server: ApolloServer = new ApolloServer({ schema });
//       return server;
//     };
//     apollo = await initApolloServer();
//   });

//   afterAll(async () => {
//     if (apollo) {
//       await apollo.stop();
//     }
//     await mongo.stop();
//     await mongoose.disconnect();
//   });

//   it("Here we test the resolvers for the courses", async () => {
//     const inputs = [
//       {
//         courseName: "Test",
//         image_url: "https://amazon.s3.com/alphas/test/img",
//         description: "here we will dicover how to make tests with jest",
//         technos: ["jojo"],
//       },
//       {
//         courseName: "Bonjour",
//         image_url: "https://amazon.s3.com/alphas/test/img",
//         description: "here we will dicover how to make tests with jest",
//         technos: ["jest", "apollo", "mongoose"],
//       },
//       {
//         courseName: "Test",
//         image_url: "hi",
//         description: "he",
//         technos: ["jest", "apollo", "mongoose"],
//       },
//       {
//         courseName: "Test",
//         image_url: "https://amazon.s3.com/alphas/test/img",
//         description: "here we will dicover how to make tests with jest",
//         technos: ["jest", "apollo", "mongoose"],
//       },
//     ];
//     const { mutate } = createTestClient(apollo);
//     for (let i = 0; i < inputs.length; i++) {
//       const INSERT_NEW_COURSE = InsertNewCourse({ ...inputs[i] });
//       const res = await mutate({
//         mutation: INSERT_NEW_COURSE,
//       });
//       expect(res.data?.addCourse.courseName).toEqual(inputs[i].courseName);
//       expect(res.data?.addCourse.image_url).toEqual(inputs[i].image_url);
//       expect(res.data?.addCourse.description).toEqual(inputs[i].description);
//       expect(res.data?.addCourse.technos.length).toEqual(
//         inputs[i].technos.length
//       );
//     }
//   });
// });
