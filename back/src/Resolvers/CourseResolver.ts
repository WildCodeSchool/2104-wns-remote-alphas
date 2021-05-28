import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Course, CourseModel } from "../Models/Course";
import { CourseInput } from "./types/CourseInput";
import { CourseId } from "./types/CourseId";

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

  // @Mutation((return)=>Course)
  // async updateCourse(@Arg("course") courseInput: CourseInput, @Arg("courseId") courseId: CourseId ){
  // }

  // update: async (req: Request, res: Response) => {
  //   const { _id } = req.body;
  //   const result = await WilderModel.updateOne({ _id }, req.body);
  //   if (result.n === 0) {
  //     res.status(404).json({ success: false, result: "No wilder found" });
  //   } else {
  //     await getById(req, res);
  //   }
  //   res.status(200).json({ success: true, result: result });
  // },
}
