import mongoose from "mongoose";
import currencySchema from "../supported-currencies/schema.js";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    currencies: {
      type: [
        { type: mongoose.Schema.Types.ObjectId, ref: "supported-currencies" },
      ],
      default: [],
    },
  },
  { collection: "users" }
);
export default userSchema;
