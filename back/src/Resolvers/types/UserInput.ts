import { User } from "../../Models/User";
import { Field, InputType } from "type-graphql";
import { SettingsInput } from "./SettingsInput";

@InputType()
export class UserInput implements Partial<User> {
  @Field((type) => String)
  public name!: string;

  @Field((type) => String)
  public firstName!: string;

  @Field((type) => String)
  public email!: string;

  @Field((type) => String)
  public password!: string;

  @Field((type) => String)
  public location!: string;

  @Field((type) => SettingsInput)
  public settings!: SettingsInput;
}
