import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String },
    username: { type: String, required: true },
    profilepic: { type: String },
    coverpic: { type: String },
    provider: { type: String, default: "local" },
    razorpayid: { type: String },
    razorpaysecret: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.User || model("User", UserSchema);
