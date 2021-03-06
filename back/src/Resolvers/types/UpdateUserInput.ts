import { User } from "../../Models/User";
import { Field, InputType } from "type-graphql";
import { SettingsInput } from "./SettingsInput";

@InputType()
export class UpdateUserInput implements Partial<User> {
  @Field((type) => String)
  public name!: string;

  @Field((type) => String)
  public firstName!: string;

  @Field((type) => String)
  public email!: string;

  @Field((type) => String, { nullable: true })
  public location?: string;

  @Field((type) => SettingsInput, { nullable: true })
  public settings?: SettingsInput;
}
