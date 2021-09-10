import { Resolver, Query, Mutation, Arg, Ctx, Subscription, PubSub, Publisher, Root } from "type-graphql";
import { Course, CourseModel } from "../Models/Course";
import { CourseInput } from "./types/CourseInput";
import { CourseId } from "./types/CourseId";
import { AuthenticationError } from "apollo-server";
import { Types } from "mongoose";
import { Notification, NotificationModel } from "../Models/Notification";
// import { UpdateCourseInput } from "./types/UpdateCourseInput";

// build the notification
interface NotificationPayload {
  _id: Types.ObjectId;
  to: string;
  title: string;
  body: string;
  //data?: {};
}

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
    //@Arg("notificationData") notificationData: {},
    @PubSub("NOTIFICATION") publish: Publisher<NotificationPayload>,
    @Ctx() { authenticatedUserEmail, expoPushToken }: { authenticatedUserEmail: string, expoPushToken: string }
  ): Promise<Course> {
    if (authenticatedUserEmail) {
      const courseWithDate = {
        ...courseInput,
        postedAt: new Date(Date.now()).toISOString(),
      };
      const addedCourse = new CourseModel({
        ...courseWithDate,
      } as Course);
      // add notification's data
      const notificationPayload = {
        to: expoPushToken,
        sound: 'default',
        title: 'New Content Online',
        body: 'Hey ! A new course is online on your Masterize, check this out !',
        //data: notificationData,
      };
      // pass notification payload to the NotificationModel to instanciate a new notification
      const newNotification = new NotificationModel(notificationPayload);
      await addedCourse.save();
      // Send notification
      await publish({ ...notificationPayload, _id: newNotification._id });
      return addedCourse;
    } else {
      throw new AuthenticationError("not connected");
    }
  }

  // Notification subscription, sends a push notification when a new course is posted
  @Subscription({
    topics: "NOTIFICATION",
  })
  newNotification(@Root() notificationPayload: Notification): Notification {
    return notificationPayload;
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
