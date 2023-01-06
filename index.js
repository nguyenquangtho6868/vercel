const express = require("express");
const app = express();
const product = require("./router/product");
app.use(express.json({ extended: false }));
app.use("/api/product", product);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`sever is running in port ${PORT}`));
