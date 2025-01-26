import AddLessonForm from "@/features/lessons/components/AddLessonForm";
import { getServerAuthSession } from "@/lib/authOptions";
import styles from "./addLesson.module.css";

export default async function AddLesson() {
  const session = await getServerAuthSession();
  console.log(session);
  return (
    <div className={styles.addLessonContainer}>
      <AddLessonForm />
    </div>
  );
}
