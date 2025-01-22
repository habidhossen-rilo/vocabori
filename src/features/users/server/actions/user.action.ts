"use server";

import { dbConnect } from "@/database/db";
import bcrypt from "bcryptjs";
import Users from "../../schemas/user.schema";
import { UserInput, userSchema } from "../../validation/userValidation";

export const createUser = async (data: UserInput) => {
  try {
    await dbConnect();

    const parsedData = userSchema.parse(data);
    const { name, email, photo, password } = parsedData;

    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name,
      email,
      photo,
      role: "user",
      password: hashedPassword,
    };

    const createdUser = await Users.create(newUser);
    console.log(createdUser);

    return {
      success: true,
      message: "User created successfully",
      user: createdUser,
    };
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message || "Something went wrong",
      };
    }
    return { success: false, message: "Something went wrong" };
  }
};
