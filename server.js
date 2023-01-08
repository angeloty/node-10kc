"use strict";

const config = require("config");
const express = require("express");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const notification = require("./modules/notifications/index");

const app = express();

notification(app);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const MONGO_HOST = config.get("MONGO_HOST");
app.listen(3000, async () => {
  try {
    await mongoose.connect(MONGO_HOST, { dbName: "interview" });
    console.log(`Example app listening on port ${3000}`);
  } catch (error) {
    console.log("There was an error connecting to MongoDB", error);
    process.exit(1);
  }
});