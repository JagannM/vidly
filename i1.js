const mongoose = require("mongoose");
const Joi = require("joi");
const genres = require("./routes/g1.js");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/vidly")
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.error("could not connect", err));

app.use("/api/genres", genres);

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
