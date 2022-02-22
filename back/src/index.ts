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
/* import { Expo } from 'expo-server-sdk';
 */
/* let expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN });

let messages = [];
for (let pushToken of somePushTokens) {

  if (!Expo.isExpoPushToken(pushToken)) {
    console.error(`Push token ${pushToken} is not a valid Expo push token`);
    continue;
  }

  messages.push({
    to: pushToken,
    sound: 'default',
    body: 'This is a test notification',
    data: { withSome: 'data' },
  })
}

let chunks = expo.chunkPushNotifications(messages);
let tickets: any = [];
(async () => {

  for (let chunk of chunks) {
    try {
      let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
      console.log(ticketChunk);
      tickets.push(...ticketChunk);
    } catch (error) {
      console.error(error);
    }
  }
})();

let receiptIds = [];
for (let ticket of tickets) {
  if (ticket.id) {
    receiptIds.push(ticket.id);
  }
}

let receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
(async () => {

  for (let chunk of receiptIdChunks) {
    try {
      let receipts = await expo.getPushNotificationReceiptsAsync(chunk);
      console.log(receipts);
      for (let receiptId in receipts) {
        let { status, message, details } = receipts[receiptId];
        if (status === 'ok') {
          continue;
        } else if (status === 'error') {
          console.error(
            `There was an error sending a notification: ${message}`
          );
          if (details && details.error) {
            console.error(`The error code is ${details.error}`);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
})(); */

if (!process.env.MONGODB) {
  throw new Error("environment variable MONGODB is missing");
}
console.log("test", process.env.NODE_ENV);
if (!process.env.SECRET_KEY && process.env.NODE_ENV !== "test") {
  throw new Error("environment variable SECRET_KEY is missing");
}
const jwtKey = process.env.SECRET_KEY || "test secret key";

const PORT = 8080;

async function bootstrap() {
  // connect to the database
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
    .connect(process.env.MONGODB!)
    // Unload all the fixtures
    .then(() => fixtures.unload())
    // load the fixtures
    .then(() => fixtures.load())
    .catch((error: Error) => console.error(error))
    // disconnect DB
    .finally(() => fixtures.disconnect());
  console.log("fixtures loaded");

  /// Get TypeGraphQL schemas
  const schema = await buildSchema({
    resolvers: [CourseResolver, UserResolver, LoginResolver, MessageResolver],
  });

  const server = new ApolloServer({
    schema,
    playground: process.env.NODE_ENV !== "production",
    context: ({ req }) => {
      if (req) {
        const token = req.headers.authorization;
        if (token) {
          try {
            const payload = jwt.verify(token, jwtKey);
            if (typeof payload !== "string") {
              return {
                authenticatedUserEmail: payload.userEmail,
                authenticatedUserRole: payload.userRole,
              };
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    },
  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
