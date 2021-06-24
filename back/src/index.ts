import "reflect-metadata";
require("dotenv").config();
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { CourseResolver, UserResolver } from "./Resolvers";

const PORT = 8080;

async function bootstrap() {
  const connectionString: any = process.env.MONGODB_ATLAS;
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
  const schema = await buildSchema({
    resolvers: [CourseResolver, UserResolver],
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
