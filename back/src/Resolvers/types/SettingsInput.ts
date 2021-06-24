import { Field, InputType } from "type-graphql";
import { ColorsSettingsInput } from "./ColorsSettingsInput";
import { DistractionSettingsInput } from "./DistractionsSettingsInput";
import { TextSettingsInput } from "./TextSettingsInput";
import { GlobalSettingsInput } from "./GlobalSettingsInput";

@InputType()
export class SettingsInput {
  @Field((type) => Boolean)
  public instantChat!: boolean;

  @Field((type) => Boolean)
  public pandaTips!: boolean;

  @Field((type) => ColorsSettingsInput)
  public colors!: ColorsSettingsInput;

  @Field((type) => TextSettingsInput)
  public texts!: TextSettingsInput;

  @Field((type) => DistractionSettingsInput)
  public distraction!: DistractionSettingsInput;

  @Field((type) => GlobalSettingsInput)
  public globalSettings!: GlobalSettingsInput;
}
