"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { dbConnect } from "@/database/db";
import { createVocabularyValidation } from "../../validation/vocabulary.validation";
import vocabularySchema from "../../schemas/vocabulary.schema";
import { MongoServerError } from "mongodb";

export const createVocabulary = async (
  vocabulary: any,
): Promise<{ success: boolean; message: string; data: any } | undefined> => {
  await dbConnect();
  const validationVocabulary = createVocabularyValidation.parse(vocabulary);
  try {
    let newVocabulary = await vocabularySchema.create(validationVocabulary);
    newVocabulary = JSON.parse(JSON.stringify(newVocabulary));
    if (!newVocabulary) {
      return {
        success: false,
        message: "Vocabulary not created",
        data: null,
      };
    }
    return {
      success: true,
      message: "Vocabulary created successfully",
      data: newVocabulary,
    };
  } catch (error: unknown) {
    if (error instanceof MongoServerError && error.code === 11000) {
      const duplicateField = Object.keys(error.keyValue)[0];
      const duplicateValue = error.keyValue[duplicateField];
      return {
        success: false,
        message: `The ${duplicateField} "${duplicateValue}" already exists.`,
        data: null,
      };
    }
  }
};
