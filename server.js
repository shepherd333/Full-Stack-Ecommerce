// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors module
const app = express();
app.use(cors()); // Use the cors middleware

const port = process.env.PORT || 5001;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define product schema and model
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
  });
  
// Specify 'products' as the collection to use in the 'myWebsiteDB' database
const Product = mongoose.model('Product', productSchema, 'products');
  
// Define route to get products
app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));