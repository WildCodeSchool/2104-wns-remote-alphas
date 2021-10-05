import { InputType, ID, Field } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class UserId {
  @Field((type) => ID)
  _id!: ObjectId;
}
