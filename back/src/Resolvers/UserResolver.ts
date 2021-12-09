import { Resolver, Arg, Mutation, Query, Ctx } from "type-graphql";
import { User, UserModel } from "../Models/User";
import { UserInput } from "./types/UserInput";
import bcrypt from "bcrypt";
import { ApolloError, AuthenticationError } from "apollo-server";
import { UserId } from "./types/UserId";
import { UpdateRoleInput } from "./types/UpdateRoleInput";
import { UpdateUserInput } from "./types/UpdateUserInput";

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => [User])
  async getUsers(
    @Ctx()
    {
      authenticatedUserEmail,
      authenticatedUserRole,
    }: {
      authenticatedUserEmail: string;
      authenticatedUserRole: string;
    }
  ): Promise<User[]> {
    if (authenticatedUserEmail) {
      if (authenticatedUserRole === "admin") {
        const users = await UserModel.find();
        return users;
      } else {
        throw new ApolloError("You are not allowed to do this");
      }
    } else {
      throw new AuthenticationError("Not connected");
    }
  }

  @Mutation((returns) => User)
  async updateRole(
    @Arg("userId") userId: UserId,
    @Arg("newRole") newRole: UpdateRoleInput,
    @Ctx()
    {
      authenticatedUserEmail,
      authenticatedUserRole,
    }: {
      authenticatedUserEmail: string;
      authenticatedUserRole: string;
    }
  ) {
    if (authenticatedUserEmail) {
      if (authenticatedUserRole === "admin") {
        const updatedUser = await UserModel.findOneAndUpdate(
          { _id: userId._id },
          { role: newRole.role }
        );
        if (updatedUser) {
          Object.assign(updatedUser, { role: newRole.role });
          await updatedUser.save();
          return updatedUser;
        }
      } else {
        throw new ApolloError("You are not allowed to do this");
      }
    } else {
      throw new AuthenticationError("Not connected");
    }
  }

  @Mutation((returns) => User)
  async updateSettings(
    @Arg("userId") userId: UserId,
    @Arg("newSettings") newSettings: UpdateUserInput,
    @Ctx() { authenticatedUserEmail }: { authenticatedUserEmail: string }
  ) {
    if (authenticatedUserEmail) {
      const hostUser = await UserModel.findOne({
        email: authenticatedUserEmail,
      });
      const userToUpdate = await UserModel.findOne({ _id: userId });
      if (hostUser?._id.toString() === userToUpdate?._id.toString()) {
        const updatedUser = await UserModel.findOneAndUpdate(
          {
            _id: userId,
          },
          newSettings
        );
        if (updatedUser) {
          Object.assign(updatedUser, newSettings);
          await updatedUser.save();
          return updatedUser;
        }
      } else {
        console.log(hostUser?._id, userToUpdate?._id);
        throw new ApolloError("You can't update another user");
      }
    } else {
      throw new AuthenticationError("Not connected");
    }
  }

  @Mutation((returns) => User)
  async signup(@Arg("user") userInput: UserInput): Promise<User> {
    if (!Object.values(userInput).find((log) => log.length === 0)) {
      const allUsers = await UserModel.find();
      if (
        !allUsers.find((existingUser) => existingUser.email === userInput.email)
      ) {
        const addedUser = new UserModel({
          ...userInput,
          role: "student",
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
  @Mutation((returns) => User)
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
