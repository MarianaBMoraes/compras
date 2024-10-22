import db from "../config/db.js";

const product_registration = new db.Schema({
  product_name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  expiration_date: {
    type: Date,
    required: true
  },
});

const Product = db.model("Product", product_registration);

export default Product;

