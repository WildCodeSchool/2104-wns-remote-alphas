import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Message {
  @Field((type) => ID)
  readonly _id!: ObjectId;

  @Field((type) => String)
  @prop({ required: true })
  public sentAt!: string;

  @Field((type) => User)
  @prop({ required: true })
  public author!: User;

  @Field((type) => String)
  @prop({ required: true })
  public text!: string;
}

export const MessageModel = getModelForClass(Message);
