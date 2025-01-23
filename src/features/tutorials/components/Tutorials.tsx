import React from "react";
import { getTutorials } from "../server/data/tutorial.data";
import styles from "../styles/tutorials.module.css";

const Tutorials = async () => {
  const response = await getTutorials();

  const convertToEmbedUrl = (url: string) => {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section className={styles.tutorialsContainer}>
      <h6 className={styles.tutorialTitle}>Tutorials</h6>
      <div className={styles.tutorialCardContainer}>
        {response?.tutorials &&
          response.tutorials.map((tutorial) => (
            <div key={tutorial._id} className={styles.tutorialCard}>
              <div className={styles.videoContainer}>
                <iframe
                  src={convertToEmbedUrl(tutorial.url)}
                  title={tutorial.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className={styles.cardTitle}>{tutorial.title}</h3>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Tutorials;
