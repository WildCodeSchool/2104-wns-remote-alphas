import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ID, ObjectType } from "type-graphql";
import { Settings } from "./Settings";

@ObjectType({description:'A user could be a student, a teacher or an administator'})
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class User {
  @Field((type) => ID, {description:'The user unique identifier'})
  readonly _id!: ObjectId;

  @Field((type) => String, {description:'The user family name'})
  @prop({ required: true })
  public name!: string;

  @Field((type) => String, {description:'The user first name'})
  @prop({ required: true })
  public firstName!: string;

  @Field((type) => String, {description:'The user email'})
  @prop({ required: true })
  public email!: string;

  // FIXME: Hash passwords !!! 😱😱😱
  @Field((type) => String, {description:'The user password'})
  @prop({ required: true })
  public password!: string;

  @Field((type) => String, {description:'The user role defines his authorizations'})
  @prop({ required: true })
  public role!: "student" | "teacher" | "admin";

  @Field((type) => String, { nullable: true, description:'The user optionnal location' })
  @prop({ required: false })
  public location?: string;

  @Field((type) => Settings, { nullable: true, description: 'The user personnal settings and theming data' })
  @prop({ required: false })
  public settings?: Settings;
}

export const UserModel = getModelForClass(User);
