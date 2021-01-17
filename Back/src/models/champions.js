import mongoose from "mongoose";
const { Schema } = mongoose;
const championsSchema = new Schema({
  name: String,
  habilities: [{ key: String, name: String, description: String }],
});
const Champions = mongoose.model("Champions", championsSchema);
