import React from "react";
import { createTutorial } from "../server/actions/tutorial.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Tutorial = () => {
  const handleCreateTutorial = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const url = formData.get("url") as string;
    const data = { title, url };
    await createTutorial(data);
  };

  return (
    <form action={handleCreateTutorial}>
      <div>
        <Label htmlFor="title">Tutorial Title</Label>
        <Input type="test" id="title" placeholder="Enter title" />
      </div>
      <div>
        <Label htmlFor="url">Video URL</Label>
        <Input type="test" id="url" placeholder="Enter URL" />
      </div>
      <Button type="submit">Add Tutorial</Button>
    </form>
  );
};

export default Tutorial;
