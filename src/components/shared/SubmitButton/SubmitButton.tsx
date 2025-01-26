"use client";

import { Button } from "@/components/ui/button";
import styles from "./submitButton.module.css";

const SubmitButton = ({
  pending,
  name,
}: {
  pending: boolean;
  name: string;
}) => {
  return (
    <Button
      type="submit"
      className={styles.formSubmitButton}
      disabled={pending}
    >
      {pending ? "Adding..." : name}
    </Button>
  );
};

export default SubmitButton;
