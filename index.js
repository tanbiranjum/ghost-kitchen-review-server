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
  mongoose.connect(process.env.MONGO_URL).catch((error) => {
    console.log(error);
  });
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });

  return server;
}

const server = startServer();

process.on("uncaughtException", (error) => {
  console.log(error.name, error.message);
  console.log("UNCAUGHT EXCEPTION! 💥💥💥 Shutting down...");
  server.close(() => {
    process.exit(1);
  });
})
