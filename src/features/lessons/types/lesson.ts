export type Lesson = {
  _id: string;
  lesson_name: string;
  admin_id: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
};
export type LessonProps = {
  lesson: Lesson;
};
