"use server";
import { dbConnect } from "@/database/db";
import lessonSchema from "../../schemas/lesson.schema";

export const getLessons = async () => {
  try {
    await dbConnect();
    const lessons = await lessonSchema.find().sort({ createdAt: -1 });
    return {
      success: true,
      message: "Lessons fetched successfully",
      data: lessons,
    };
  } catch (error) {
    console.log(error);
  }
};
