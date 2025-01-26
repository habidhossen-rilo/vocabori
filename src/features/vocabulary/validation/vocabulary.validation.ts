import { z } from "zod";
export const createVocabularyValidation = z.object({
  word: z.string({ required_error: "Word is required" }),
  english_word: z.string({ required_error: "English word is required" }),
  pronunciation: z.string({ required_error: "Pronunciation is required" }),
  use: z.string({ required_error: "Use is required" }),
  lesson_id: z.string({ required_error: "Lesson ID is required" }),
  admin_id: z.string({ required_error: "Admin ID is required" }),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
