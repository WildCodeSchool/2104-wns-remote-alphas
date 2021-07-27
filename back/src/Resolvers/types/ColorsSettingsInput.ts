import { modelOptions, Severity } from "@typegoose/typegoose";
import { Field, InputType } from "type-graphql";

@InputType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class ColorsSettingsInput {
  @Field((type) => String)
  public theme!: string;

  @Field((type) => String)
  public customColors!: string;
}
