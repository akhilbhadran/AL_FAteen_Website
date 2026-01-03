import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: String, // or location
  location: String,
  text: { type: String, required: true },
  stars: { type: Number, default: 5 },
  isApproved: { type: Boolean, default: false },
  
  // 👇 THIS IS THE MISSING PIECE. ADD THIS LINE:
  image: String, 
  
}, { timestamps: true });

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);