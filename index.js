const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
require("dotenv").config();

const customerRoute = require("./routes/customer.route");
app.use("/api/customers",customerRoute);


const connectionString = `mongodb+srv://dumisadeveloper:VMtnshtIAoKW9wwI@customers-cluster.mt0p1yd.mongodb.net/USER-API?retryWrites=true&w=majority&appName=Customers-Cluster`;

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


  