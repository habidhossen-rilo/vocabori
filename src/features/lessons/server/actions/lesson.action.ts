import { dbConnect } from "@/database/db";
import lessonSchema from "../../schemas/lesson.schema";
import { createLessonValidation } from "../../validation/lessons.validation";

export async function createLesson(lesson: {
  lesson_name: string;
  admin_id: string;
}) {
  console.log(lesson, "lesson");
  let validateData = createLessonValidation.parse(lesson);
  await dbConnect();

  try {
    console.log(validateData, "validateData");
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
}
