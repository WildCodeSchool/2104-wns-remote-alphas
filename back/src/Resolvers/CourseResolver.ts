import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Course, CourseModel } from "../Models/Course";
import { CourseInput } from "./types/CourseInput";
import { CourseId } from "./types/CourseId";
// import { UpdateCourseInput } from "./types/UpdateCourseInput";

@Resolver((of) => Course)
export class CourseResolver {
  @Query((returns) => [Course])
  async getCourses(): Promise<Course[]> {
    const courses = await CourseModel.find();

    return courses;
  }

  @Query((returns) => Course, { nullable: true })
  getCourseById(@Arg("courseId") courseId: CourseId) {
    return CourseModel.findOne({ _id: courseId });
  }

  @Mutation((returns) => Course)
  async addCourse(@Arg("course") courseInput: CourseInput): Promise<Course> {
    const addedCourse = new CourseModel({
      ...courseInput,
    } as Course);
    await addedCourse.save();
    return addedCourse;
  }

  @Mutation(() => Course)
  async updateOneCourse(
    @Arg("courseId") courseId: CourseId,
    @Arg("data") data: CourseInput
  ) {
    const updatedCourse = await CourseModel.findOneAndUpdate(
      { _id: courseId },
      data
    );

    if (updatedCourse) {
      Object.assign(updatedCourse, data);
      await updatedCourse.save();
    }

    return updatedCourse;
  }
}
