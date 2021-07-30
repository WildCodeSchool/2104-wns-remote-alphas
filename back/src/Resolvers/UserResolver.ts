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
  @Query((returns) => User)
  async me(
    @Ctx() { authenticatedUserEmail }: { authenticatedUserEmail: string }
  ) {
    console.log(authenticatedUserEmail);

    if (authenticatedUserEmail) {
      const users = await UserModel.find();
      const me = users.find((user) => user.email === authenticatedUserEmail);
      if (me) {
        me.password = "";
        return me;
      } else {
        throw new ApolloError("User not found");
      }
    } else {
      throw new AuthenticationError("Not connected");
    }
  }

  @Mutation((returns) => User)
  async addUser(@Arg("user") userInput: UserInput): Promise<User> {
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
      throw new ApolloError("This email is already token");
    }
  }
}
