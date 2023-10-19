import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
  },
  quantity: {
    type: Number,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
});


export default mongoose.model("Marketplace", productSchema);