import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, default: "New" }, // For your Admin Panel
  },
  { timestamps: true }
);

// This check prevents "OverwriteModelError" when Next.js hot-reloads
export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);