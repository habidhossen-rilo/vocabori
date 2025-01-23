import { signIn } from "next-auth/react";
import { LoginUser } from "../../types/user.type";

export const loginUser = async (data: LoginUser) => {
  try {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (result?.error) {
      console.log(result?.error);
      return { success: false, message: "Invalid credentials" };
    } else if (result?.ok) {
      return { success: true, message: "Login successful" };
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message || "Something went wrong",
      };
    }
    return { success: false, message: "Something went wrong" };
  }
};
