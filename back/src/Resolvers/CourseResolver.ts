import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";
import { Course, CourseModel } from "../Models/Course";
import { CourseInput } from "./types/CourseInput";
import { CourseId } from "./types/CourseId";
import { AuthenticationError } from "apollo-server";
// import { UpdateCourseInput } from "./types/UpdateCourseInput";

@Resolver((of) => Course)
export class CourseResolver {
  @Query((returns) => [Course])
  async getCourses(
    @Ctx() { authenticatedUserEmail }: { authenticatedUserEmail: string }
  ): Promise<Course[]> {
    if (authenticatedUserEmail) {
      const courses = await CourseModel.find();
      return courses;
    } else {
      throw new AuthenticationError("Not connected");
    }
  }

  @Query((returns) => Course, { nullable: true })
  getCourseById(@Arg("courseId") courseId: CourseId) {
    return CourseModel.findOne({ _id: courseId });
  }

  @Mutation((returns) => Course)
  async addCourse(@Arg("course") courseInput: CourseInput): Promise<Course> {
    const courseWithDate = {
      ...courseInput,
      postedAt: new Date(Date.now()).toISOString(),
    };
    const addedCourse = new CourseModel({
      ...courseWithDate,
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
