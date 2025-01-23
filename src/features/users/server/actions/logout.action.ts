import { signOut } from "next-auth/react";

export const logout = async () => {
  try {
    await signOut({ redirect: false });
    // return { success: true, message: "Logout successful" };
  } catch (error: unknown) {
    if (error instanceof Error) {
      // return {
      //   success: false,
      //   message: error.message || "Something went wrong",
      // };
      console.log(error);
    }
    // return { success: false, message: "Something went wrong" };
  }
};
