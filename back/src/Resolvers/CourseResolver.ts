import { Resolver, Query } from "type-graphql";
import { Course, CourseModel } from "../Models/Course";

@Resolver((of) => Course)
export class CourseResolver {
  @Query((returns) => [Course])
  async getCourses(): Promise<Course[]> {
    const courses = await CourseModel.find();
    console.log(courses);

    return courses;
  }
}
