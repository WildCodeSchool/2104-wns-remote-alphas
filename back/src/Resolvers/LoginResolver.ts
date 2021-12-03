require("dotenv").config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server-errors";
import { Mutation, Resolver, Arg } from "type-graphql";
import { User, UserModel } from "../Models/User";
import { LogsInput } from "./types/LogsInput";

const jwtKey = process.env.SECRET_KEY || "test secret key";
@Resolver((of) => User)
export class LoginResolver {
  @Mutation((returns) => String)
  async login(@Arg("userInput") userInput: LogsInput): Promise<string> {
    const users = await UserModel.find();
    const userFound = users.find((user) => user.email === userInput.email);
    if (
      userFound &&
      bcrypt.compareSync(userInput.password, userFound.password)
    ) {
      const token = jwt.sign(
        {
          userEmail: userFound.email,
          userRole: userFound.role,
        },
        jwtKey
      );
      return token;
    } else {
      throw new AuthenticationError("Invalid credentials");
    }
  }
}
