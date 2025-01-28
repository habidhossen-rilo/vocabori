import VocabularyPage from "../../../../features/vocabulary/components/Vocabulary";
import { getVocabulariesByLessonId } from "../../../../features/vocabulary/server/data/vocabulary.data";
import { Vocabulary } from "../../../../features/vocabulary/types/vocabulary";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function LessonDetailsPage(props: Props) {
  const { id } = await props.params;
  let vocabularies: Vocabulary[] = [];
  if (id) {
    const result = await getVocabulariesByLessonId(id);
    vocabularies = JSON.parse(JSON.stringify(result.data)) || [];
  }
  return (
    <>
      <VocabularyPage vocabularies={vocabularies} />
    </>
  );
}
