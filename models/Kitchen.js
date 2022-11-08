const mongoose = require("mongoose");

const kitchenSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  website: String,
  description: String,
  image: String,
  price: Number,
  rating: Number,
});

const Kitchen = mongoose.model("Kitchen", kitchenSchema);
module.exports = Kitchen;
