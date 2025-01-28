"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/types/navbar";

const NavLink = ({
  item,
  onClick,
}: NavLinkProps & { onClick?: () => void }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.navLink} ${pathName === item.path && styles.active}`}
      onClick={onClick}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
