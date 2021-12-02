import {
  Resolver,
  Query,
  Mutation,
  Subscription,
  Arg,
  Ctx,
  Root,
  PubSub,
  Publisher,
} from "type-graphql";
import { Message, MessageModel } from "../Models/Message";
import { User } from "../Models/User";
import { AuthenticationError } from "apollo-server";
import { UserModel } from "../Models/User";

import { DocumentType } from "@typegoose/typegoose";
import { Types } from "mongoose";

interface MessagePayload {
  _id: Types.ObjectId;
  text: string;
  author: DocumentType<User> | null;
  sentAt: string;
}
@Resolver((of) => Message)
export class MessageResolver {
  // @Subscription((returns)=>Chatroom)
  @Mutation((returns) => Message)
  async postMessage(
    // @Arg("userId") userId: UserId,
    @Ctx() { authenticatedUserEmail }: { authenticatedUserEmail: string },
    // @Arg("chatroomId") chatroomId: ObjectId,
    @Arg("message") message: string,
    @PubSub("MESSAGE") publish: Publisher<MessagePayload>
  ): Promise<Message> {
    if (authenticatedUserEmail) {
      const user = await UserModel.findOne({ email: authenticatedUserEmail });
      const messagePayload = {
        text: message,
        sentAt: new Date(Date.now()).toISOString(),
        author: user,
      };
      const newMessage = new MessageModel(messagePayload);
      await newMessage.save();
      await publish({ ...messagePayload, _id: newMessage._id });
      return newMessage;
    } else {
      throw new AuthenticationError("Not connected");
    }
  }
  @Subscription({
    topics: "MESSAGE",
  })
  newMessage(@Root() messagePayload: Message): Message {
    return messagePayload;
  }

  @Query((returns) => [Message])
  async getMessages(
    @Ctx() { authenticatedUserEmail }: { authenticatedUserEmail: string }
  ): Promise<Message[]> {
    if (authenticatedUserEmail) {
      const messages = await MessageModel.find();
      return messages.sort((a, b) => {
        return a.sentAt > b.sentAt ? -1 : 1;
      });
    } else {
      throw new AuthenticationError("Not connected");
    }
  }
}
