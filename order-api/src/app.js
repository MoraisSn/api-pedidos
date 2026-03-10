const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/orderRoutes');

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect("mongodb+srv://natalia-morais:bInGi9WXzEzqZzRW@cluster0.fntl9mq.mongodb.net/?appName=orders")
.then(() => console.log("MongoDB conectado"))
.catch(err => console.log(err));

module.exports = app;