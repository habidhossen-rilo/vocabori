import { DataTable } from "@/features/lessons/components/ManageLesson/LessonTable";
import { getLessons } from "@/features/lessons/server/data/getLesson";
import React from "react";

const ManageLesson = async () => {
  let lessons = await getLessons();
  lessons = JSON.parse(JSON.stringify(lessons));
  return (
    <div className="m-4">
      <DataTable lesson={lessons?.data || []} />
    </div>
  );
};

export default ManageLesson;
