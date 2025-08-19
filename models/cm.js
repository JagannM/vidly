const mongoose = require("mongoose");
const Joi = require("joi");

const customerSchema = new mongoose.Schema({
  isGold: Boolean,
  name: String,
  phone: Number,
});

const Customer = mongoose.model("Customer", customerSchema);

function validateCustomer(customer) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    isGold: Joi.boolean,
    phone: Joi.string().min(3).required(),
  });
  return schema.validate(customer);
}

exports.Customer = Customer;
exports.validateCustomer = validateCustomer;
