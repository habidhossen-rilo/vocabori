"use client";

import { useState } from "react";
import styles from "./links.module.css";
import Image from "next/image";
import NavLink from "../NavLink/NavLink";
import { Dropdown } from "../Dropdown/Dropdown";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Lessons",
    path: "/lessons",
  },
  {
    title: "Tutorials",
    path: "/tutorials",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Links = ({ session }: { session: any }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <Dropdown />
        ) : (
          <>
            <NavLink item={{ title: "Login", path: "/login" }} />
            <NavLink item={{ title: "Signup", path: "/signup" }} />
          </>
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
