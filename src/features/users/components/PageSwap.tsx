import Link from "next/link";
import styles from "../styles/user.module.css";
const PageSwap = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children === "signup" ? (
        <div className={styles.alreadyAccount}>
          <p className={styles.alreadyAccountTxt}>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      ) : (
        <div className={styles.alreadyAccount}>
          <p className={styles.alreadyAccountTxt}>
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default PageSwap;
