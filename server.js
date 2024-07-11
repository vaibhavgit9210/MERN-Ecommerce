import express from "express";
import colors from "colors";
import dotenv from "dotenv";

//configure dotenv
dotenv.config();

//rest object
const app = express();

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to jungle</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.SERVER_MODE} on port ${PORT}`.bgGreen.white);
});
