"use server";
import { dbConnect } from "@/database/db";
import vocabularySchema from "../../schemas/vocabulary.schema";

export const getVocabularies = async () => {
  await dbConnect();
  try {
    const vocabularies = await vocabularySchema.find().sort({ createdAt: -1 });
    if (vocabularies) {
      return {
        success: true,
        message: "Vocabualries retrieve successfully",
        data: vocabularies,
      };
    } else {
      return {
        success: false,
        message: "Can't retireve vocabularies",
        data: null,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSingleVocabulary = async (id: string) => {
  await dbConnect();
  try {
    const vocabulary = await vocabularySchema.findById(id);
    if (vocabulary) {
      return {
        success: true,
        message: "Vocabulary retrieve successful",
        data: vocabulary,
      };
    } else {
      return {
        success: false,
        message: "Can't retrieve vocabulary.",
        data: null,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export const getVocabulariesByLessonId = async (lessonId: string) => {
  await dbConnect();
  try {
    const vocabularies = await vocabularySchema
      .find({ lesson_id: lessonId })
      .sort({ createdAt: -1 });
    if (vocabularies) {
      return {
        success: true,
        message: "Vocabualries retrieve successfully",
        data: vocabularies,
      };
    } else {
      return {
        success: false,
        message: "Can't retireve vocabularies",
        data: null,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while retrieving vocabularies",
      data: null,
    };
  }
};
