import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Course {
  @Field((type) => ID)
  readonly _id!: ObjectId;

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
