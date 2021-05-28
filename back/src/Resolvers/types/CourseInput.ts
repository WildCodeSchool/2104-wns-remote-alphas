import { Course } from "../../Models/Course";
import { InputType, Field } from "type-graphql";

@InputType()
export class CourseInput implements Partial<Course> {
  @Field((type) => String, { nullable: true })
  courseName!: string;

  @Field((type) => String, { nullable: true })
  description!: string;

  @Field((type) => String, { nullable: true })
  image_url!: string;

  @Field((type) => [String], { nullable: true })
  technos!: string[];
}
