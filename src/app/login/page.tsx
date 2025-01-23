import styles from "../../features/users/styles/user.module.css";
import LoginForm from "@/features/users/components/Login";

const page = () => {
  return (
    <div className={styles.signupCard}>
      <h2 className={styles.createAccount}>Login Account</h2>
      <LoginForm />
    </div>
  );
};

export default page;
