import "reflect-metadata";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { CourseResolver } from "./Resolvers/CourseResolver";

const PORT = 8000;

async function bootstrap() {
  mongoose
    .connect("mongodb://localhost:27017/masterize", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    })
    .then(() => {
      console.log("Connected to database");
    });
  const schema = await buildSchema({
    resolvers: [CourseResolver],
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
