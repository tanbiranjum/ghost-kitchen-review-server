const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  content: String,
  kitchenId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Kitchen",
  },
  displayName: String,
  uid: String,
  userEmail: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
