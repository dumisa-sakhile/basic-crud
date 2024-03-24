const express = require("express");
const router = express.Router();

const {getCustomers,
  getCustomer,
  deleteCustomer,
  updateCustomer,
  addCustomer} = require("../controllers/customer.controller.js");


router.route("/")
.post(addCustomer)
.get(getCustomers);

router
  .route("/:id")
  .get(getCustomer)
  .delete(deleteCustomer)
  .patch(updateCustomer);

module.exports = router;
