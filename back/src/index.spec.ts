import "reflect-metadata";
require("dotenv").config();
const { createTestClient } = require("apollo-server-testing");
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { MongoMemoryServer } from "mongodb-memory-server";
import { CourseResolver, UserResolver } from "./Resolvers";
import {
  INSERT_NEW_COURSE,
  INSERT_NEW_USER,
  GET_COURSES,
  GET_USERS,
} from "./Test";
import jwt from "jsonwebtoken";

if (!process.env.SECRET_KEY && process.env.NODE_ENV !== "test") {
  throw new Error("environment variable SECRET_KEY is missing");
}
const jwtKey = process.env.SECRET_KEY || "test secret key";

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
        useFindAndModify: false,
      });
      const schema = await buildSchema({
        resolvers: [CourseResolver, UserResolver],
      });
      const server: ApolloServer = new ApolloServer({
        schema,
        context: () => {
          const token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJ2ZXJnZXNfYW50aG9ueUBob3RtYWlsLmZyIiwiaWF0IjoxNjMzNjc5OTQ1fQ.-U27XzyH4eYVDl-tjLyINjn7P99myIIoK5u9FLFM-zQ";
          try {
            const payload = jwt.verify(token, jwtKey);
            if (typeof payload !== "string") {
              return { authenticatedUserEmail: payload.userEmail };
            }
          } catch (err) {
            console.log(err);
          }
        },
      });
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
    expect(res.data?.addCourse.technos).toEqual(["jest", "apollo", "mongoose"]);

    expect(res.data?.addCourse._id).toBeDefined();
  });

  it("Here we test the query to get all the Courses ", async () => {
    const { query } = createTestClient(apollo);
    const res = await query({
      query: GET_COURSES,
    });
    expect(res.data?.getCourses.length).toEqual(1);
  });

  it("Here we test the mutation to add user", async () => {
    const { mutate } = createTestClient(apollo);
    const res = await mutate({
      mutation: INSERT_NEW_USER,
    });
    expect(res.data?.signup).toBeDefined();
  });
  it("Here we test the query to get all the Users", async () => {
    const { query } = createTestClient(apollo);
    const res = await query({
      query: GET_USERS,
    });
    expect(res.data?.getUsers.length).toEqual(1);
    expect(typeof res.data?.getUsers).toEqual("object");
  });
});
