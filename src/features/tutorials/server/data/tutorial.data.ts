import { dbConnect } from "@/database/db";
import Tutorial from "../../schemas/tutorial.schema";

// GET all tutorials
export async function getTutorials() {
  "use server";
  try {
    await dbConnect();

    const tutorials = await Tutorial.find();

    return {
      success: true,
      tutorials,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Unknown error occurred" };
  }
}
