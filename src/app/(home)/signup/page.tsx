import SignUpForm from "@/features/users/components/Signup";
import styles from "../../../features/users/styles/user.module.css";
import PageSwap from "@/features/users/components/PageSwap";

const page = () => {
  return (
    <div className={styles.signupCard}>
      <h2 className={styles.createAccount}>Create Account</h2>
      <SignUpForm />
      <PageSwap>login</PageSwap>
    </div>
  );
};

export default page;
