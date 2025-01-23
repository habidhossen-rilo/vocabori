import { Button } from "@/components/ui/button";
import { LessonProps } from "../../types/lesson";
import style from "./singleLesson.module.css";
import Link from "next/link";

const SingleLesson = ({ lesson }: LessonProps) => {
  return (
    <div className={style.lessonContainer}>
      <p>{lesson.lesson_name}</p>
      <Link href={`/lessons/${lesson._id}`}>
        <Button variant="ghost">Learn</Button>
      </Link>
    </div>
  );
};

export default SingleLesson;
