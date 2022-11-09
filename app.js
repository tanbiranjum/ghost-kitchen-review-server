const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const kitchenRoutes = require("./routes/kitchenRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/v1/kitchens", kitchenRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/auth", authRoutes);

// 404 Error Handler
app.use((req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Global error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    next("There was an error");
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.send("There was an error");
    }
  }
});

module.exports = app;
