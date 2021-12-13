import { modelOptions, Severity } from "@typegoose/typegoose";
import { Field, InputType } from "type-graphql";
@InputType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class DistractionSettingsInput {
  @Field((type) => String)
  public distractionTheme!: string;

  @Field((type) => Boolean)
  public textNotifications!: boolean;

  @Field((type) => Boolean)
  public soundNotifications!: boolean;

  @Field((type) => Boolean)
  public animations!: boolean;

  @Field((type) => Boolean)
  public readingMode!: boolean;

  @Field((type) => Boolean)
  public showTimelineCards!: boolean;

  @Field((type) => Boolean)
  public allowDialogs!: boolean;
}
