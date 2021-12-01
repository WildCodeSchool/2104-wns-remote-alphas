import { ID, Field, ObjectType } from "type-graphql";
import { ObjectId } from "mongodb";

@ObjectType()
export class DeleteResponse {
  @Field((type) => ID)
  _id!: ObjectId;
  @Field((type) => String)
  message!: string;
}
