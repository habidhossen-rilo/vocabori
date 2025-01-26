"use client";
import { useSession } from "next-auth/react";

import Image from "next/image";
import styles from "../styles/profile.module.css";
import { Edit, MailIcon } from "lucide-react";
const UserProfile = () => {
  const session = useSession();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.profile}>
            <div className={styles.content}>
              <div className={styles.profileImageMobile}>
                <Image
                  src={session.data?.user?.photo || "/default-profile.jpg"}
                  alt="Profile"
                  className={styles.profileImageMobile}
                  width={192}
                  height={192}
                />
              </div>

              <h1 className={styles.name}>{session.data?.user?.name}</h1>
              <div className={styles.divider}></div>
              {/* <p className={styles.title}>
                <svg
                  className={styles.icon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                What you do
              </p> */}
              <p className={styles.location}>
                <MailIcon size={16} className="mr-2" />
                {session.data?.user?.email || "Email not provided"}
              </p>
              <p className={styles.description}>
                Totally optional short description about yourself, what you do
                and so on.
              </p>

              <button className={styles.contactButton}>
                <Edit size={16} className="mr-2" />
                Edit Profile
              </button>
            </div>
          </div>

          <div className={styles.imageCol}>
            <Image
              src={session.data?.user?.photo || "/default-profile.jpg"}
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
