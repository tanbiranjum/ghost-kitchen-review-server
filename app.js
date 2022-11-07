const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

const kitchenRoutes = require("./routes/kitchenRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

app.use("/api/v1/kitchens", kitchenRoutes);
app.use("/api/v1/reviews", reviewRoutes);

module.exports = app;
