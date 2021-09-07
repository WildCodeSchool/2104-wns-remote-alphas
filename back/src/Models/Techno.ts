import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ID, ObjectType } from "type-graphql";
import { Chatroom } from "./Chatroom";
@ObjectType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Techno {
  @Field((type) => ID)
  readonly _id!: ObjectId;

  @Field((type) => String)
  @prop({ required: true })
  public name!: string;

  @Field((type) => Chatroom)
  @prop({ required: true })
  public chatroom!: Chatroom;
}

export const TechnoModel = getModelForClass(Techno);
