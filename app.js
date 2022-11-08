const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const kitchenRoutes = require("./routes/kitchenRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/v1/kitchens", kitchenRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/users", userRoutes);

module.exports = app;
