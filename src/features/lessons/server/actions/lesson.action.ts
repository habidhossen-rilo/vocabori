"use server";
import { dbConnect } from "@/database/db";
import lessonSchema from "../../schemas/lesson.schema";
import { createLessonValidation } from "../../validation/lessons.validation";
import { revalidatePath } from "next/cache";

export const createLesson = async (lesson: {
  lesson_name: string;
  admin_id: string;
}): Promise<{ success: boolean; message: string } | undefined> => {
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
    revalidatePath("/dashboard/lesson");
    return { success: true, message: "Lesson created successfully" };
  } catch (error) {
    console.log(error);
  }
};

export const getSingleLesson = async (id: string) => {
  await dbConnect();
  try {
    const lesson = await lessonSchema.findById(id);
    if (!lesson) {
      return { success: false, message: "Lesson not found" };
    }
    return {
      success: true,
      message: "Lesson Retrieve Successfully",
      data: lesson,
    };
  } catch (error) {
    console.log(error);
  }
};
