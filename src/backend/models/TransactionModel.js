import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },

  amount: {
    type: Number,
    required: [true, "Amount is required"],
    default: 0,
  },

  category: {
    type: String,
    required: [true, "Category is required"],
  },

  description: {
    type: String,
    required: [true, "Description is required"],
  },

  transactionType: {
    type: String,
    required: [true, "Transaction Type is required"],
  },

  city: {
    type: String,
    required: [true, "City is required"],
  },

  image: {
    type: String,
    required: [true, "image is required"],
  },

  date: {
    type: Date,
    required: [true, "Date is required"],
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

delete mongoose.connection.models["Transaction"];
export default mongoose.model("Transaction", transactionSchema);
