import { Button } from "@/components/ui/button";
import { LessonProps } from "../../types/lesson";
import Link from "next/link";
import { BookCheck } from "lucide-react";
import style from "../../styles/singleLesson.module.css";

const SingleLesson = ({ lesson }: LessonProps) => {
  return (
    <div className={style.lessonContainer}>
      <p className={style.lessonName}>
        <BookCheck />
        {lesson.lesson_name}
      </p>
      <Link href={`/lessons/${lesson._id}`}>
        <Button variant="ghost">Learn</Button>
      </Link>
    </div>
  );
};

export default SingleLesson;
