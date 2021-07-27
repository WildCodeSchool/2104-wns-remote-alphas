import { modelOptions, Severity } from "@typegoose/typegoose";
import { Field, InputType } from "type-graphql";

@InputType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class GlobalSettingsInput {
  @Field((type) => [String])
  public shortcuts!: string[];
}
