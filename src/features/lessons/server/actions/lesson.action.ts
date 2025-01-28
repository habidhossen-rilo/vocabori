"use server";
import { dbConnect } from "@/database/db";
import lessonSchema from "../../schemas/lesson.schema";
import { createLessonValidation } from "../../validation/lessons.validation";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";

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

export const updateLesson = async (
  id: string,
  updatedData: {
    lesson_name: string;
  },
): Promise<{
  success: boolean;
  message: string;
}> => {
  await dbConnect();

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ObjectId format");
    }

    const lesson = await lessonSchema.findById(id);

    if (!lesson) {
      return { success: false, message: "Lesson not found" };
    }

    lesson.lesson_name = updatedData.lesson_name;

    await lesson.save();

    revalidatePath("/dashboard/lesson");

    return { success: true, message: "Lesson updated successfully" };
  } catch (error) {
    console.error("Error updating lesson:", error);
    return {
      success: false,
      message: "An error occurred while updating the lesson.",
    };
  }
};

export const deleteLesson = async (
  id: string,
): Promise<{
  success: boolean;
  message: string;
}> => {
  await dbConnect();

  try {
    const deletedLesson = await lessonSchema.findByIdAndDelete(id);
    if (!deletedLesson) {
      return { success: false, message: "Lesson not found" };
    }
    revalidatePath("/dashboard/lesson");
    return { success: true, message: "Lesson deleted successfully" };
  } catch (error) {
    console.error("Error deleting lesson:", error);
    return {
      success: false,
      message: "An error occurred while deleting the lesson.",
    };
  }
};
