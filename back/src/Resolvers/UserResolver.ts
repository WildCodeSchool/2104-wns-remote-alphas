import { Resolver, Arg, Mutation, Query, Ctx } from "type-graphql";
import { User, UserModel } from "../Models/User";
import { UserInput } from "./types/UserInput";
import bcrypt from "bcrypt";
import { ApolloError, AuthenticationError } from "apollo-server";

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => [User])
  async getUsers(): Promise<User[]> {
    const users = await UserModel.find();
    return users;
  }

  @Mutation((returns) => User)
  async signup(@Arg("user") userInput: UserInput): Promise<User> {
    if (!Object.entries(userInput).find((log) => log[1].length === 0)) {
      const allUsers = await UserModel.find();
      if (
        !allUsers.find((existingUser) => existingUser.email === userInput.email)
      ) {
        const addedUser = new UserModel({
          ...userInput,
          password: bcrypt.hashSync(userInput.password, 10),
        } as User);
        await addedUser.save();
        return addedUser;
      } else {
        throw new ApolloError("This email is already taken");
      }
    } else {
      throw new ApolloError("Please fill all the fields");
    }
  }
  @Query((returns) => User)
  async me(
    @Ctx() { authenticatedUserEmail }: { authenticatedUserEmail: string }
  ) {
    if (authenticatedUserEmail) {
      const me = await UserModel.findOne({ email: authenticatedUserEmail });
      return me;
    } else {
      throw new AuthenticationError("Not connected");
    }
  }
}
