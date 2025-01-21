import mongoose, { Schema } from "mongoose";

const LessonSchema = new Schema(
  {
    lesson_name: { type: String, required: true, unique: true },
    lesson_number: { type: Number, required: false, default: 1 },
    vocabulary_count: { type: Number, required: false },
    admin_id: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export default mongoose.models.Lessons ||
  mongoose.model("Lessons", LessonSchema);
