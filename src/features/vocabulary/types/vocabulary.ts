import { Lesson } from "@/features/lessons/types/lesson";
import { User } from "@/features/users/types/user.type";
import { Types } from "mongoose";

export type Vocabulary = {
  word: string;
  english_word: string;
  pronunciation: string;
  use: string;
  lesson_id: Types.ObjectId | Lesson | string;
  admin_id: Types.ObjectId | User | string;
};
