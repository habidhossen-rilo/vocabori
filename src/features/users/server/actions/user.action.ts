"use server";

import { dbConnect } from "@/database/db";
import bcrypt from "bcryptjs";
import Users from "../../schemas/user.schema";
import { userSchema } from "../../validation/userValidation";
type IUser = {
  name: string;
  email: string;
  photo: string;
  password: string;
};

export const createUser = async (data: IUser) => {
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

    const convertedUser = JSON.parse(JSON.stringify(createdUser));

    return {
      success: true,
      message: "User created successfully",
      user: convertedUser,
    };
    // console.log(createdUser);
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
