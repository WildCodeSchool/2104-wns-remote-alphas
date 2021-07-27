import { modelOptions, Severity } from "@typegoose/typegoose";
import { Field, InputType } from "type-graphql";

@InputType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class TextSettingsInput {
  @Field((type) => [String])
  public font!: string[];

  @Field((type) => [String])
  public fontWeight!: string[];

  @Field((type) => Number)
  public fontSize!: number;

  @Field((type) => Number)
  public letterSpacing!: number;

  @Field((type) => Number)
  public lineHeight!: number;

  @Field((type) => [Number])
  public fontTheme!: number[];
}
