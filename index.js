const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
require("dotenv").config();

const customerRoute = require("./routes/customer.route");
app.use("/api/customers", customerRoute);

const ADMIN_PWD = process.env.ADMIN_PWD;
const ADMIN_NAME = process.env.ADMIN_NAME;

const connectionString = `mongodb+srv://${ADMIN_NAME}:${ADMIN_PWD}@customers-cluster.mt0p1yd.mongodb.net/USER-API?retryWrites=true&w=majority&appName=Customers-Cluster`;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("database connected");

    app.listen(3000, () => {
      console.log("server started");
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error.message);
  });
