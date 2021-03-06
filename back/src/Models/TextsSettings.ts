import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class TextSettings {
  @Field((type) => String)
  @prop({ required: true })
  public font!: string;

  @Field((type) => Number)
  @prop({ required: true })
  public fontWeight!: number;

  @Field((type) => Number)
  @prop({ required: true })
  public fontTheme!: number;
}
export const TextSettingsModel = getModelForClass(TextSettings);
