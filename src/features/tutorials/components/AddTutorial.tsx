import React from "react";
import { createTutorial } from "../server/actions/tutorial.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styles from "../styles/tutorials.module.css";

const AddTutorial = async () => {
  const handleCreateTutorial = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const url = formData.get("url") as string;
    const data = { title, url };
    await createTutorial(data);
  };

  return (
    <form action={handleCreateTutorial}>
      <div className={styles.formContainer}>
        <h6 className={styles.formTitle}>Add Tutorial</h6>
        <div className={styles.formGroup}>
          <Label htmlFor="title">Tutorial Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title"
          />
        </div>
        <div className={styles.formGroup}>
          <Label htmlFor="url">Video URL</Label>
          <Input type="text" name="url" id="url" placeholder="Enter URL" />
        </div>
        <Button type="submit" className={styles.formSubmitButton}>
          Add Tutorial
        </Button>
      </div>
    </form>
  );
};

export default AddTutorial;
