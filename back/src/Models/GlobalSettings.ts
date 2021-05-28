import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class GlobalSettings {
  @Field((type) => [String])
  @prop({ required: true })
  public shortcuts!: string[];
}

export const GlobalSettingsModel = getModelForClass(GlobalSettings);
