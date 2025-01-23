"use client";

import { Button } from "@/components/ui/button";
import styles from "../styles/tutorials.module.css";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className={styles.formSubmitButton}
      disabled={pending}
    >
      {pending ? "Adding..." : "Add Tutorial"}
    </Button>
  );
};

export default SubmitButton;
