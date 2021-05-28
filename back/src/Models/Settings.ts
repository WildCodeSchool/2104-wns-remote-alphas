import { getModelForClass, prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { ColorsSettings } from "./ColorsSettings";
import { DistractionSettings } from "./DistractionSettings";
import { GlobalSettings } from "./GlobalSettings";
import { TextSettings } from "./TextsSettings";

@ObjectType()
export class Settings {
  @Field((type) => Boolean)
  @prop({ required: true })
  public instantChat!: boolean;

  @Field((type) => Boolean)
  @prop({ required: true })
  public pandaTips!: boolean;

  @Field((type) => ColorsSettings)
  @prop({ required: true })
  public colors!: ColorsSettings;

  @Field((type) => TextSettings)
  @prop({ required: true })
  public texts!: TextSettings;

  @Field((type) => DistractionSettings)
  @prop({ required: true })
  public distraction!: DistractionSettings;

  @Field((type) => GlobalSettings)
  @prop({ required: true })
  public globalSettings!: GlobalSettings;
}

export const SettingsModel = getModelForClass(Settings);
