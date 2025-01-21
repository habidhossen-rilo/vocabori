import React from "react";
import { createLesson } from "../server/actions/lesson.action";

const Lesson = () => {
  const handleCreateLesson = async () => {
    "use server";
    const lesson = {
      lesson_name: "Language for beginners for young people",
      admin_id: "678f38be493d13037522771f",
    };
    await createLesson(lesson);
  };
  return (
    <div>
      <form action={handleCreateLesson}>
        <button type="submit">Add Lesson</button>
      </form>
    </div>
  );
};

export default Lesson;
