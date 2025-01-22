// validation/tutorialValidation.ts
import { z } from "zod";

export const tutorialValidator = z.object({
  title: z.string().min(3, "Title must be at least 5 characters long"),
  url: z
    .string()
    .url("Invalid URL format")
    .min(10, "URL must be at least 10 characters long"),
});

export type TutorialInput = z.infer<typeof tutorialValidator>;
