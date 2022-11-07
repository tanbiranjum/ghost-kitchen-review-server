const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  content: String,
  rating: Number,
  kitchen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Kitchen",
  },
  uid: String,
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
