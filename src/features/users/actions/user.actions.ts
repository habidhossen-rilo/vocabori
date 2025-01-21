import { dbConnect } from "@/database/db";
import userSchema from "../schemas/user.schema";

export async function createUser() {
  try {
    await dbConnect();
    const user = {
      name: "John Doe",
      email: "jhon@gmail.com",
      photo: "https://www.google.com",
      role: "admin",
      password: "123456",
    };
    await userSchema.create(user);
  } catch (error) {
    console.log(error);
  }
}
