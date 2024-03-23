const express = require("express");
const router = express.Router();

const {getCustomers,
  getCustomer,
  deleteCustomer,
  updateCustomer,
  addCustomer} = require("../controllers/customer.controller.js");

//get all
router.get("/", getCustomers);

//get one
router.get("/:id", getCustomer);

//create
router.post("/", addCustomer);

//update
router.patch("/:id", updateCustomer);

//delete
router.delete("/:id", deleteCustomer);


module.exports = router;
