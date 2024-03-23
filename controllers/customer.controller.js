
const customers = require("../models/customers.model");

const getCustomers = async (req, res) => {
    try {
      const data = await customers.find();
      res.send(data);
    } catch (error) {
      res.send(error);
    }
}

const getCustomer = async (req, res) => {
  try {
    const data = await customers.findById(req.params.id);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const data = await customers.findByIdAndDelete(req.params.id);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
}

const updateCustomer = async (req, res) => {
  try {
    const data = await customers.findByIdAndUpdate(req.params.id, req.body);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
}

const addCustomer = async (req, res) => {
  try {
    const data = await customers.create(req.body);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  getCustomers,
  getCustomer,
  deleteCustomer,
  updateCustomer,
  addCustomer,
};