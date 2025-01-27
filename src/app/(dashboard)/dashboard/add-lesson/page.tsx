import AddLessonForm from "@/features/lessons/components/AddLessonForm";
import styles from "./addLesson.module.css";

export default async function AddLesson() {
  return (
    <div className={styles.addLessonContainer}>
      <AddLessonForm />
    </div>
  );
}
