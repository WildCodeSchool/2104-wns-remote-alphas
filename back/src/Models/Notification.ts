import {
    getModelForClass,
    modelOptions,
    prop,
    Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Notification {
    @Field((type) => ID)
    readonly _id!: ObjectId;

    @Field((type) => String)
    @prop({ required: true })
    public to!: string;

    @Field((type) => String)
    @prop({ required: true })
    public title!: string;

    @Field((type) => String)
    @prop({ required: true })
    public body!: string;

    // @Field((type) => {})
    // @prop({ required: false })
    // public data!: {};
}

export const NotificationModel = getModelForClass(Notification);
