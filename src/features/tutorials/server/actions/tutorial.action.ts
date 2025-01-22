import { dbConnect } from "@/database/db";
import Tutorial from "../../schemas/tutorial.schema";
import {
  TutorialInput,
  tutorialValidator,
} from "@/features/tutorials/validation/tutorial.validation";

// CREATE a tutorial
export async function createTutorial(data: TutorialInput) {
  "use server";
  try {
    await dbConnect();

    const parsedData = tutorialValidator.parse(data);
    const { title, url } = parsedData;
    const tutorial = new Tutorial({ title, url });
    await tutorial.save();

    return {
      success: true,
      message: "Tutorial created successfully",
      tutorial,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Unknown error occurred" };
  }
}
