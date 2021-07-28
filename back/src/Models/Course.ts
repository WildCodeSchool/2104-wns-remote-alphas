import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Course {
  @Field((type) => ID)
  readonly _id!: ObjectId;

  @Field((type) => String)
  @prop({ required: true })
  public postedAt!: string;

  @Field((type) => String)
  @prop({ required: true })
  public courseName!: string;

  @Field((type) => String)
  @prop({ required: true })
  public image_url!: string;

  @Field((type) => String)
  @prop({ required: true })
  public description!: string;

  @Field((type) => [String])
  @prop({ required: true })
  public technos!: string[];
}

export const CourseModel = getModelForClass(Course);
