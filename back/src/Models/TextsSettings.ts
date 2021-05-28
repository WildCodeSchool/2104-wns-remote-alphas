import { getModelForClass, prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class TextSettings {
  @Field((type) => [String])
  @prop({ required: true })
  public font!: string[];

  @Field((type) => [String])
  @prop({ required: true })
  public fontWeight!: string[];

  @Field((type) => Number)
  @prop({ required: true })
  public fontSize!: number;

  @Field((type) => Number)
  @prop({ required: true })
  public letterSpacing!: number;

  @Field((type) => Number)
  @prop({ required: true })
  public lineHeight!: number;

  @Field((type) => [Number])
  @prop({ required: true })
  public fontTheme!: number[];
}
export const TextSettingsModel = getModelForClass(TextSettings);
