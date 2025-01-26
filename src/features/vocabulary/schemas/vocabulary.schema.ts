import mongoose, { Schema } from "mongoose";

const VocabularySchema = new Schema(
  {
    word: { type: String, required: true, unique: true },
    english_word: { type: String, required: true },
    pronunciation: { type: String, required: true },
    use: { type: String, required: true },
    lesson_id: {
      type: Schema.Types.ObjectId,
      ref: "Lesson",
      required: true,
    },
    admin_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
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

export default mongoose.models.Vocabulary ||
  mongoose.model("Vocabulary", VocabularySchema);
