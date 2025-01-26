import AddVocabularyForm from "@/features/vocabulary/components/AddVocabularyForm";
import styles from "./addVocabulary.module.css";
import { getLessons } from "@/features/lessons/server/data/getLesson";

export default async function AddVocabularyPage() {
  let lessons = await getLessons();
  lessons = JSON.parse(JSON.stringify(lessons));
  return (
    <div className={styles.addVocabularyContainer}>
      <AddVocabularyForm lessons={lessons} />
    </div>
  );
}
