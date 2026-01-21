const express = require("express");
const { readDB, writeDB } = require("../utils/db");

const router = express.Router();

// Add Product
router.post("/", (req, res) => {
  const db = readDB();

  const product = {
    id: db.products.length + 1,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock
  };

  db.products.push(product);
  writeDB(db);

  res.status(201).json(product);
});

module.exports = router;
