import { Button } from "@/components/ui/button";
import { LessonProps } from "../../types/lesson";
import Link from "next/link";
import { BookCheck } from "lucide-react";
import style from "../../styles/singleLesson.module.css";
import { getServerAuthSession } from "@/lib/authOptions";
import { hasPermission } from "@/permissions/authPermission";

const SingleLesson = async ({ lesson }: LessonProps) => {
  const session = await getServerAuthSession();
  const user = session?.user;
  return (
    <div className={style.lessonContainer}>
      <p className={style.lessonName}>
        <BookCheck />
        {lesson.lesson_name}
      </p>
      <div>
        {user && hasPermission(user, "lesson", "delete") && (
          <Button>Delete</Button>
        )}
        <Link href={`/lessons/${lesson._id}`}>
          <Button variant="ghost">Learn</Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleLesson;
