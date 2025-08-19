const mongoose = require("mongoose");
const Joi = require("joi");
const customers = require("./routes/cr.js");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/customerinfo")
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.error("could not connect", err));

app.use("/api/customers", customers);

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
