const express = require("express");
const app = express();
const PORT = 3000;
const productsData = require("./product.json");
const cors = require("cors");

app.use(cors());

app.get("/api/product", (req, res) => {
  res.json(productsData);
});

app.get("/api/product/:id", (req, res) => {
  const productId = req.params.id;
  const product = productsData.find((product) => product.pid === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
