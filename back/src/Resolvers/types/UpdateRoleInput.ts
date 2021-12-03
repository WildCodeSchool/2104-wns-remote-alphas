import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateRoleInput {
  @Field((type) => String, { nullable: true })
  public role!: "student" | "teacher" | "admin";
}
