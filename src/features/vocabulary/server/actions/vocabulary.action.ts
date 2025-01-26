import { dbConnect } from "@/database/db";
import vocabularySchema from "../../schemas/vocabulary.schema";
import { Vocabulary } from "../../types/vocabulary";
import { createVocabularyValidation } from "../../validation/vocabulary.validation";

export const createVocabulary = async (
  vocabulary: Vocabulary,
): Promise<
  { success: boolean; message: string; data: Vocabulary | null } | undefined
> => {
  const validationVocabulary = createVocabularyValidation.parse(vocabulary);
  await dbConnect();
  try {
    const newVocabulary = await vocabularySchema.create(validationVocabulary);
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
  } catch (error) {
    console.log(error);
  }
};
