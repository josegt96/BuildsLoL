import mongoose from "mongoose";
const { Schema } = mongoose;
const itemsSchema = new Schema({
  name: String,
  subitems: itemsSchema,
  prices: String,
  description: String,
});
const Items = mongoose.model("Items", itemsSchema);
