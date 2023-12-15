import mongoose from "mongoose";
const currencySchema = new mongoose.Schema(
  {
    label: { type: String, required: true, unique: true },
    value: { type: String, required: true, unique: true },
  },
  { collection: "supported-currencies" }
);
export default currencySchema;
