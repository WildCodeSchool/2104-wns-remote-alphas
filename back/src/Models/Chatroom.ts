import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ID, ObjectType } from "type-graphql";
import { Message } from "./Message";
@ObjectType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Chatroom {
  @Field((type) => ID)
  readonly _id!: ObjectId;

  @Field((type) => String)
  @prop({ required: true })
  public topic!: string;

  @Field((type) => Message)
  @prop({ required: true })
  public Messages!: Message[];
}
export const ChatroomModel = getModelForClass(Chatroom);
