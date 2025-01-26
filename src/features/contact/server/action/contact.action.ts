"use server";

import { dbConnect } from "@/database/db";
import contactSchema from "../../schema/contact.schema";
import { createContactValidation } from "../../validation/contact.validation";
import { z } from "zod";

export const createContact = async (
  contact: z.infer<typeof createContactValidation>,
): Promise<{ success: boolean; message: string }> => {
  await dbConnect();

  try {
    const validatedData = createContactValidation.parse(contact);
    await contactSchema.create(validatedData);
    return { success: true, message: "Contact message sent successfully" };
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message:
          "Validation error: " + error.errors.map((e) => e.message).join(", "),
      };
    }
    return { success: false, message: "Failed to send contact message" };
  }
};
