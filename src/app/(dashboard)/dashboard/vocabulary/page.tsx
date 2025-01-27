import { getLessons } from "@/features/lessons/server/data/getLesson";
import { DataTable } from "@/features/vocabulary/components/ManageVocabulary/VocabularyTable";
import { getVocabularies } from "@/features/vocabulary/server/data/vocabulary.data";
import React from "react";

const ManageVocabulary = async () => {
  let vocabularies = await getVocabularies();
  vocabularies = JSON.parse(JSON.stringify(vocabularies));

  let lessons = await getLessons();
  lessons = JSON.parse(JSON.stringify(lessons));

  return (
    <div className="m-4">
      <DataTable
        vocabularies={vocabularies?.data || []}
        lessons={lessons?.data || []}
      />
    </div>
  );
};

export default ManageVocabulary;
