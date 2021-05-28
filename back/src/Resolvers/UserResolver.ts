import { Resolver, Arg, Mutation, Query } from "type-graphql";
import { User, UserModel } from "../Models/User";
import { UserInput } from "./types/UserInput";

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => [User])
  async getUsers(): Promise<User[]> {
    const users = await UserModel.find();
    return users;
  }

  @Mutation((returns) => User)
  async addUser(@Arg("user") userInput: UserInput): Promise<User> {
    const addedUser = new UserModel({
      ...userInput,
    } as User);
    await addedUser.save();
    return addedUser;
  }
}
