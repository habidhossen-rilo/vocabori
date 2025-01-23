import { getLessons } from "../server/data/getLesson";
import SingleLesson from "./SingleLesson/SingleLesson";
import AddLessonForm from "./AddLessonForm";

const Lesson = async () => {
  const lessons = await getLessons();
  return (
    <div>
      {lessons &&
        lessons.data.map((lesson) => {
          return (
            <div key={lesson._id}>
              <SingleLesson lesson={lesson} />
            </div>
          );
        })}
      <AddLessonForm />
    </div>
  );
};

export default Lesson;
