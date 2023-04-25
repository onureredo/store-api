const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

const products = require('./utils/products.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send(products);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
