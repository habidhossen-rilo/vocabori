import { dbConnect } from "@/database/db";
import User from "../../schemas/user.schema";

// GET count of users with role 'user'
export async function getUserCount() {
  "use server";
  try {
    await dbConnect();

    // Get the count of users with role 'user'
    const userCount = await User.countDocuments({ role: "user" });

    return {
      success: true,
      count: userCount,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Unknown error occurred" };
  }
}
