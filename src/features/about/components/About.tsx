import Image from "next/image";
import styles from "../styles/about.module.css";
import aboutImage from "../../../../public/language.svg";
const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.image}>
            <Image height={400} width={400} src={aboutImage} alt="Company" />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className="text">
            <span className={styles.subHeader}>About us</span>
            <h2 className={styles.headerText}>
              About{" "}
              <span>
                <span className={styles.logo}>VO</span>
                <span className={styles.logoYellow}>CA</span>
                <span className={styles.logo}>BO</span>
                <span className={styles.logoYellow}>RI</span>
              </span>
            </h2>
            <div className={styles.description}>
              <p className={styles.descriptionParagraph}>
                At LanguageLearn, we believe that learning a new language is not
                just about vocabulary and grammar__it&apos;s about immersing
                yourself in a new culture, unlocking opportunities, and
                connecting with people from all walks of life.
              </p>
              <p className={styles.descriptionParagraph}>
                Our mission is simple: to provide a platform that empowers
                learners to study a variety of languages in an interactive,
                engaging, and personalized way. Whether you&apos;re learning for
                travel, business, or personal growth, we offer tools and
                resources to make your language learning journey smooth and
                successful.
              </p>
              <p className={styles.descriptionParagraph}>
                With a team of expert instructors, cutting-edge technology, and
                a community of like-minded learners, we strive to be the go-to
                platform for language learners everywhere. Join us today and
                take the first step toward mastering a new language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
