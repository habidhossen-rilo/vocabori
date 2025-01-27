import { getSingleLesson } from "@/features/lessons/server/actions/lesson.action";

export default async function LessonDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  let lesson;
  if (params.id) {
    lesson = await getSingleLesson(params.id);
  }
  console.log(lesson);
  return (
    <div>
      <p>{lesson?.data.lesson_name}</p>
    </div>
  );
}
