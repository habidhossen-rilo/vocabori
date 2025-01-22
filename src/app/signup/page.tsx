import SignUpForm from "@/features/users/components/Signup";
import styles from "../../features/users/styles/user.module.css";

const page = () => {
  return (
    <div className={styles.signupCard}>
      <h2 className={styles.H2}>Create Account</h2>
      <SignUpForm />
    </div>
  );
};

export default page;
