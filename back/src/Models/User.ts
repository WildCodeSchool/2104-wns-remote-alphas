import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ID, ObjectType } from "type-graphql";
import { Settings } from "./Settings";

@ObjectType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class User {
  @Field((type) => ID)
  readonly _id!: ObjectId;

  @Field((type) => String)
  @prop({ required: true })
  public name!: string;

  @Field((type) => String)
  @prop({ required: true })
  public firstName!: string;

  @Field((type) => String)
  @prop({ required: true })
  public email!: string;

  @Field((type) => String)
  @prop({ required: true })
  public password!: string;

  @Field((type) => String, { nullable: true })
  @prop({ required: false })
  public location?: string;

  @Field((type) => Settings, { nullable: true })
  @prop({ required: false })
  public settings?: Settings;

  @Field((type) => String,  { nullable: true })
  public expoPushToken?: string;
}

export const UserModel = getModelForClass(User);
