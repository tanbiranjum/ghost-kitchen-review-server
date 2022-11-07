const mongoose = require("mongoose");

const kitchenSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  website: String,
  description: String,
  image: String,
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Kitchen = mongoose.model("Kitchen", kitchenSchema);
module.exports = Kitchen;
