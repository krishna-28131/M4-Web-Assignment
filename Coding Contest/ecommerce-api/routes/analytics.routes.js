const express = require("express");
const { readDB } = require("../utils/db");

const router = express.Router();

// All Orders with Count
router.get("/allorders", (req, res) => {
  const db = readDB();
  const orders = [];
  db.orders.forEach(o => orders.push(o));

  res.json({ count: orders.length, orders });
});

// Cancelled Orders
router.get("/cancelled-orders", (req, res) => {
  const db = readDB();
  const orders = db.orders.filter(o => o.status === "cancelled");

  res.json({ count: orders.length, orders });
});

// Shipped Orders
router.get("/shipped", (req, res) => {
  const db = readDB();
  const orders = db.orders.filter(o => o.status === "shipped");

  res.json({ count: orders.length, orders });
});

// Total Revenue by Product
router.get("/total-revenue/:productId", (req, res) => {
  const db = readDB();
  const product = db.products.find(
    p => p.id === Number(req.params.productId)
  );

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const totalRevenue = db.orders
    .filter(o => o.productId === product.id && o.status !== "cancelled")
    .reduce((sum, o) => sum + o.quantity * product.price, 0);

  res.json({ productId: product.id, totalRevenue });
});

// Overall Revenue
router.get("/alltotalrevenue", (req, res) => {
  const db = readDB();

  const totalRevenue = db.orders
    .filter(o => o.status !== "cancelled")
    .reduce((sum, o) => {
      const product = db.products.find(p => p.id === o.productId);
      return sum + o.quantity * product.price;
    }, 0);

  res.json({ totalRevenue });
});

module.exports = router;
