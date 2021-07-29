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
  getCourseById(
    @Arg("courseId") courseId: CourseId,
    @Ctx() { authenticatedUserEmail }: { authenticatedUserEmail: string }
  ) {
    if (authenticatedUserEmail) {
      return CourseModel.findOne({ _id: courseId });
    } else {
      throw new AuthenticationError("Not connected");
    }
  }

  @Mutation((returns) => Course)
  async addCourse(
    @Arg("course") courseInput: CourseInput,
    @Ctx() { authenticatedUserEmail }: { authenticatedUserEmail: string }
  ): Promise<Course> {
    if (authenticatedUserEmail) {
      const courseWithDate = {
        ...courseInput,
        postedAt: new Date(Date.now()).toISOString(),
      };
      const addedCourse = new CourseModel({
        ...courseWithDate,
      } as Course);
      await addedCourse.save();
      return addedCourse;
    } else {
      throw new AuthenticationError("not connected");
    }
  }

  @Mutation(() => Course)
  async updateOneCourse(
    @Arg("courseId") courseId: CourseId,
    @Arg("data") data: CourseInput,
    @Ctx() { authenticatedUserEmail }: { authenticatedUserEmail: string }
  ) {
    if (authenticatedUserEmail) {
      const updatedCourse = await CourseModel.findOneAndUpdate(
        { _id: courseId },
        data
      );
      if (updatedCourse) {
        Object.assign(updatedCourse, data);
        await updatedCourse.save();
      }
      return updatedCourse;
    } else {
      throw new AuthenticationError("Not connected");
    }
  }
}
