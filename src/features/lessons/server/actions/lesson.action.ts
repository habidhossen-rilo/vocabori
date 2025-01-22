"use server";
import { dbConnect } from "@/database/db";
import lessonSchema from "../../schemas/lesson.schema";
import { createLessonValidation } from "../../validation/lessons.validation";

export const createLesson = async (lesson: {
  lesson_name: string;
  admin_id: string;
}): Promise<{ success: boolean; message: string } | undefined> => {
  // const { lesson_name, admin_id } = Object.fromEntries(formData);
  // console.log(lesson_name, admin_id, "lesson_name, admin_id");
  let validateData = createLessonValidation.parse(lesson);
  await dbConnect();

  try {
    const previousLessson = await lessonSchema
      .findOne()
      .sort({ createdAt: -1 });
    console.log(previousLessson, "previousLessson");
    if (previousLessson) {
      validateData = {
        ...validateData,
        lesson_number: previousLessson.lesson_number + 1,
      };
    } else {
      validateData = {
        ...validateData,
        lesson_number: 1,
      };
    }
    await lessonSchema.create(validateData);
    return { success: true, message: "Lesson created successfully" };
  } catch (error) {
    console.log(error);
  }
};
