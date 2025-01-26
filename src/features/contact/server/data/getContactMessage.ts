import { dbConnect } from "@/database/db";
import contactSchema from "../../schema/contact.schema";

export const getContactMessage = async () => {
  try {
    await dbConnect();
    const contactMessages = await contactSchema.find().sort({ createdAt: -1 });
    return {
      success: true,
      message: "Contact messages fetched successfully",
      data: contactMessages,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to fetch contact messages",
      data: null,
    };
  }
};
