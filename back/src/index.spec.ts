import "reflect-metadata";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { MongoMemoryServer } from "mongodb-memory-server";
import { CourseResolver, UserResolver } from "./Resolvers";
import { INSERT_NEW_COURSE, INSERT_NEW_USER, GET_COURSES } from "./Test";
const { createTestClient } = require("apollo-server-testing");

describe("Tests for the back", () => {
  let apollo: ApolloServer | null = null;
  let mongo: MongoMemoryServer = new MongoMemoryServer();

  beforeAll(async () => {
    mongo = new MongoMemoryServer();
    const uri = await mongo.getUri();

    const initApolloServer = async () => {
      await mongoose.connect(uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
      });
      const schema = await buildSchema({
        resolvers: [CourseResolver, UserResolver],
      });
      const server: ApolloServer = new ApolloServer({ schema });
      return server;
    };
    apollo = await initApolloServer();
  });

  afterAll(async () => {
    if (apollo) {
      await apollo.stop();
    }
    await mongo.stop();
    await mongoose.disconnect();
  });

  it("Here we test the mutation to add courses", async () => {
    const { mutate } = createTestClient(apollo);
    const res = await mutate({
      mutation: INSERT_NEW_COURSE,
    });
    expect(res.data?.addCourse.courseName).toEqual("Test");
    expect(res.data?.addCourse.image_url).toEqual(
      "https://amazon.s3.com/alphas/test/img"
    );
    expect(res.data?.addCourse.description).toEqual(
      "here we will dicover how to make tests with jest"
    );
  });
  it("Here we test the query to get all the Courses ", async () => {
    const { query } = createTestClient(apollo);
    const res = await query({
      query: GET_COURSES,
    });
    expect(res.data.getCourses.length).toEqual(1);
  });

  it("Here we test the mutation to add user", async () => {
    const { mutate } = createTestClient(apollo);
    const res = await mutate({
      mutation: INSERT_NEW_USER,
    });
    expect(res.data?.addUser).toBeDefined();
  });
});
