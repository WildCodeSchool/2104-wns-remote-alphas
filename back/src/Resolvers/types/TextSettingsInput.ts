import { modelOptions, Severity } from "@typegoose/typegoose";
import { Field, InputType } from "type-graphql";

@InputType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class TextSettingsInput {
  @Field((type) => String)
  public font!: string;

  @Field((type) => Number)
  public fontWeight!: number;

  @Field((type) => Number)
  public fontTheme!: number;
}
