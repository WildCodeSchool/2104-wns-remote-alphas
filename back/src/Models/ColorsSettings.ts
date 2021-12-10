import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class ColorsSettings {
  @Field((type) => String)
  @prop({ required: true })
  public theme!: string;

  @Field((type) => [String])
  @prop({ required: true })
  public customColors!: string[];
}

export const ColorsSettingsModel = getModelForClass(ColorsSettings);
