import { Field, InputType } from "type-graphql";
@InputType()
export class LogsInput {
  @Field((type) => String)
  public email!: string;

  @Field((type) => String)
  public password!: string;
}
