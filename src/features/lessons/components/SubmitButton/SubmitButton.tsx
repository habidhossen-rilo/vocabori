"use client";

import { Button } from "@/components/ui/button";
import styles from "./submitButton.module.css";

const SubmitButton = ({ pending }: { pending: boolean }) => {
  return (
    <Button
      type="submit"
      className={styles.formSubmitButton}
      disabled={pending}
    >
      {pending ? "Adding..." : "Add Lesson"}
    </Button>
  );
};

export default SubmitButton;
