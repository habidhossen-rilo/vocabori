"use client";

import { useState } from "react";
import { Vocabulary } from "../types/vocabulary";
import styles from "../styles/vocabulary.module.css";

// Pronunciation function
const pronounceWord = (word: string) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "ja-JP"; // Japanese pronunciation
  window.speechSynthesis.speak(utterance);
};

interface VocabularyPageProps {
  vocabularies: Vocabulary[];
}

const VocabularyPage: React.FC<VocabularyPageProps> = ({ vocabularies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < vocabularies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentVocabulary = vocabularies[currentIndex];

  return (
    <div>
      {vocabularies.length > 0 ? (
        <div className={styles.container}>
          {/* Vocabulary Display */}
          <div className={styles.vocabularyCard}>
            <h2 className={styles.vocabularyWord}>{currentVocabulary?.word}</h2>
            {/* Pronunciation Section */}
            {currentVocabulary.pronunciation && (
              <div className={styles.pronunciation}>
                <span>Pronunciation: {currentVocabulary?.pronunciation}</span>
                <button
                  className={styles.pronunciationButton}
                  onClick={() => pronounceWord(currentVocabulary.word)}
                >
                  {/* You can use any icon, here I use a simple text representation for the audio icon */}
                  🔊
                </button>
              </div>
            )}
            <p className={styles.vocabularyDefinition}>
              {currentVocabulary?.english_word} - {currentVocabulary?.use}
            </p>
          </div>
          {/* Navigation Buttons */}
          <div className={styles.buttonGroup}>
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`${styles.button} ${
                currentIndex === 0 ? styles.buttonDisabled : ""
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === vocabularies.length - 1}
              className={`${styles.button} ${
                currentIndex === vocabularies.length - 1
                  ? styles.buttonDisabled
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center font-medium">No Vocabulary Found</p>
      )}
    </div>
  );
};

export default VocabularyPage;
