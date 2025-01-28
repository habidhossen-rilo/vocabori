import styles from "./loading.module.css";
const Loader = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className={styles.customLoader}></div>
    </div>
  );
};

export default Loader;
