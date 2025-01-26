import React from "react";
import styles from "../styles/contact.module.css";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
} from "react-icons/hi";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div>
          <p className={styles.heading}>Contact us</p>
          <h1 className={styles.title}>Chat to our friendly team</h1>
          <p className={styles.subtitle}>
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>

        <div className={styles.cardGrid}>
          <div className={styles.infoGrid}>
            <div>
              <span className={styles.iconContainer}>
                <HiOutlineMail size={20} />
              </span>
              <h2 className={styles.cardTitle}>Email</h2>
              <p className={styles.cardText}>
                Our friendly team is here to help.
              </p>
              <p className={styles.cardLink}>vocabori@gmail.com</p>
            </div>

            <div>
              <span className={styles.iconContainer}>
                <HiOutlineChatAlt2 size={20} />
              </span>
              <h2 className={styles.cardTitle}>Live chat</h2>
              <p className={styles.cardText}>
                Our friendly team is here to help.
              </p>
              <p className={styles.cardLink}>Start new chat</p>
            </div>

            <div>
              <span className={styles.iconContainer}>
                <HiOutlineLocationMarker size={20} />
              </span>
              <h2 className={styles.cardTitle}>Office</h2>
              <p className={styles.cardText}>
                Come say hello at our office HQ.
              </p>
              <p className={styles.cardLink}>
                100 Smith Street Collingwood VIC 3066 AU
              </p>
            </div>

            <div>
              <span className={styles.iconContainer}>
                <HiOutlinePhone size={20} />
              </span>
              <h2 className={styles.cardTitle}>Phone</h2>
              <p className={styles.cardText}>Mon-Fri from 8am to 5pm.</p>
              <p className={styles.cardLink}>+1 (555) 000-0000</p>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
