import mongoose, { Schema, Document } from "mongoose";

export interface ITutorial extends Document {
  title: string;
  url: string;
}

const TutorialSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Tutorial ||
  mongoose.model<ITutorial>("Tutorial", TutorialSchema);
