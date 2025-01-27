import VocabularyPage from "../../../../features/vocabulary/components/Vocabulary";
import { getVocabulariesByLessonId } from "../../../../features/vocabulary/server/data/vocabulary.data";
import { Vocabulary } from "../../../../features/vocabulary/types/vocabulary";

export default async function LessonDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  let vocabularies: Vocabulary[] = [];
  if (params.id) {
    const result = await getVocabulariesByLessonId(params.id);
    vocabularies = JSON.parse(JSON.stringify(result.data)) || [];
  }
  return (
    <>
      <VocabularyPage vocabularies={vocabularies} />
    </>
  );
}
