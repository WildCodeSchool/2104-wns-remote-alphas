import { Course } from "../../Models/Course";
import { InputType, Field } from "type-graphql";

@InputType()
export class CourseInput implements Partial<Course> {
  @Field((type) => String)
  courseName!: string;

  @Field((type) => String)
  description!: string;

  @Field((type) => String)
  image_url!: string;

  @Field((type) => [String])
  technos!: string[];
}
