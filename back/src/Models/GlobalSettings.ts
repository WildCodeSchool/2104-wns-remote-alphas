import { getModelForClass, prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class GlobalSettings {
  @Field((type) => [String])
  @prop({ required: true })
  public shortcuts!: string[];
}

export const GlobalSettingsModel = getModelForClass(GlobalSettings);
