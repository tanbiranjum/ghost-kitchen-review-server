const http = require("http");
const app = require("./app");
require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
  console.log("MongoDB connection is ready!");
});

mongoose.connection.once("error", () => {
  console.error("Connection is failed");
});

const PORT = process.env.PORT || 5000;

function startServer() {
  mongoose.connect(process.env.MONGO_URL);
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
}

startServer();
