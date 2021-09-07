import "reflect-metadata";
require("dotenv").config();
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import {
  CourseResolver,
  UserResolver,
  LoginResolver,
  MessageResolver,
} from "./Resolvers";
import jwt, { JwtPayload } from "jsonwebtoken";

if (!process.env.MONGODB) {
  throw new Error("environment variable MONGODB is missing");
}
if (!process.env.SECRET_KEY) {
  throw new Error("environment variable SECRET_KEY is missing");
}
const jwtKey = process.env.SECRET_KEY;

const PORT = 8080;

async function bootstrap() {
  const connectionString = process.env.MONGODB!;
  mongoose
    .connect(connectionString, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Connected to database");
    });

  // Add fixtures
  console.log("fixtures started");
  const Fixtures = require("node-mongodb-fixtures");
  const fixtures = new Fixtures();
  // connects to mongoDB
  fixtures
    .connect(process.env.MONGODB)
    // Unload all the fixtures
    .then(() => fixtures.unload())
    // load the fixtures
    .then(() => fixtures.load())
    .catch((error: Error) => console.error(error))
    // disconnect DB
    .finally(() => fixtures.disconnect());
  console.log("fixtures loaded");

  const schema = await buildSchema({
    resolvers: [CourseResolver, UserResolver, LoginResolver, MessageResolver],
  });

  const server = new ApolloServer({
    schema,
    playground: true,
    context: ({ req }) => {
      if (req) {
        const token = req.headers.authorization;
        if (token) {
          try {
            const payload = jwt.verify(token, jwtKey);
            if (typeof payload !== "string") {
              return { authenticatedUserEmail: payload.userEmail };
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    },

    // subscriptions: {
    //   path: "/subscriptions",
    //   onConnect: () => {
    //     console.log("Client connected");
    //   },
    //   onDisconnect: () => {
    //     console.log("Client disconnected");
    //   },
    // },
  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
