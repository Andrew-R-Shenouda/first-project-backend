import mongoose from "mongoose";
import currencySchema from "./schema.js";
const model = mongoose.model("supported-currencies", currencySchema);
export default model;
