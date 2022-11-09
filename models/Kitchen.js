const mongoose = require("mongoose");

const kitchenSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  website: String,
  description: String,
  image: String,
  price: Number,
  rating: {
    type: Number,
    default: Math.floor(Math.random() * (5 - 3 + 1) + 3),
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Kitchen = mongoose.model("Kitchen", kitchenSchema);
module.exports = Kitchen;
