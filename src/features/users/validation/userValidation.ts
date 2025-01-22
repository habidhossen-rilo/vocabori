import * as z from "zod";

export const userSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  photo: z.string().url({
    message: "Please enter a valid URL for the photo.",
  }),
  role: z.string().default("user"),
});

export type UserInput = z.infer<typeof userSchema>;
