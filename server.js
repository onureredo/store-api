const express = require('express');
const app = express();
const port = 8000;

const products = require('./utils/products.json');

app.get('/', (req, res) => {
  res.send(products);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
