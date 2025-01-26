import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ["new", "read", "replied"], default: "new" },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export default mongoose.models.Contacts ||
  mongoose.model("Contacts", ContactSchema);
