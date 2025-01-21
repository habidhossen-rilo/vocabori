import { z } from "zod";
export const createLessonValidation = z.object({
  lesson_name: z
    .string({ required_error: "Lesson name is required" })
    .min(2)
    .max(100),
  lesson_number: z.number().optional(),
  vocabulary_count: z.string().optional(),
  admin_id: z.string({ required_error: "Admin ID is required" }),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});
