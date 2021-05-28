import { getModelForClass, prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
@ObjectType()
export class DistractionSettings {
  @Field((type) => [String])
  @prop({ required: true })
  public distractionTheme!: string[];

  @Field((type) => Boolean)
  @prop({ required: true })
  public textNotifications!: boolean;

  @Field((type) => Boolean)
  @prop({ required: true })
  public soundNotifications!: boolean;

  @Field((type) => Boolean)
  @prop({ required: true })
  public animations!: boolean;

  @Field((type) => Boolean)
  @prop({ required: true })
  public readingMode!: boolean;

  @Field((type) => Boolean)
  @prop({ required: true })
  public showTimelineCards!: boolean;

  @Field((type) => Boolean)
  @prop({ required: true })
  public allowDialogs!: boolean;
}

export const DistrationSettingsModel = getModelForClass(DistractionSettings);
