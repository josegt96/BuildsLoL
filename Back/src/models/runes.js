import mongoose from "mongoose";
const { Schema } = mongoose;
const runesSchema = new Schema({
  name: String,
  firstpath: String,
  secondpath: String,
});
const Runes = mongoose.model("Runes", runesSchema);
