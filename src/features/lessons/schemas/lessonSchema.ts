import { Schema } from "mongoose";

// schemas here
export const lessonSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
