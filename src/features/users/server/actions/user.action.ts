"use server";
import { dbConnect } from "@/database/db";
import userSchema from "../../schemas/user.schema";
import { CreatedUser, FormData } from "../../types/user.type";
import { validateUserInput } from "../../validation/userValidation";
import bcrypt from "bcryptjs";

export const createUser = async (formData: FormData) => {
  try {
    await dbConnect();

    const { name, email, photo, password } = Object.fromEntries(
      formData as unknown as [string, string][],
    );

    const errors = validateUserInput({ name, email, photo, password });
    if (errors.length > 0) {
      throw new Error(errors.join(", "));
    }

    const existingUser = await userSchema.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: CreatedUser = {
      name,
      email,
      photo,
      role: "user",
      password: hashedPassword,
    };

    const createdUser = await userSchema.create(newUser);

    return { message: "User created successfully", user: createdUser };
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message || "Something went wrong");
    }
    throw new Error("Something went wrong");
  }
};
