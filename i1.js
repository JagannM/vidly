const Joi = require("joi");
const genres = require("./routes/g1.js");
const express = require("express");
const app = express();

app.use("/api/genres", genres);

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
