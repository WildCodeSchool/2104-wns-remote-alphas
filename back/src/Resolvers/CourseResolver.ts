import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Course, CourseModel } from "../Models/Course";
import { CourseInput } from "./types/CourseInput";

@Resolver((of) => Course)
export class CourseResolver {
  @Query((returns) => [Course])
  async getCourses(): Promise<Course[]> {
    const courses = await CourseModel.find();

    return courses;
  }
  @Mutation((returns) => Course)
  async addCourse(@Arg("course") courseInput: CourseInput): Promise<Course> {
    const addedCourse = new CourseModel({
      ...courseInput,
    } as Course);
    await addedCourse.save();
    return addedCourse;
  }
}
