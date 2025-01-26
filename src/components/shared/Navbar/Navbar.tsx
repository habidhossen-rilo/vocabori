import Link from "next/link";
import Links from "./Links/Links";
import style from "./navbar.module.css";
import { getServerAuthSession } from "@/lib/authOptions";

const Navbar = async () => {
  const authSession = await getServerAuthSession();
  return (
    <div className={style.container}>
      <Link href={"/"} className={style.logo}>
        VO<span className="text-[#eeee83]">CA</span>BO
        <span className="text-[#eeee83]">RI</span>
      </Link>
      <div>
        <Links session={authSession} />
      </div>
    </div>
  );
};

export default Navbar;
