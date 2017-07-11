const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Item = require('./models/item.js');
const Purchase = require('./models/purchase.js');
const express = require('express');
const router = express.Router();
const app = express();
// Replace "test" with your database name.

mongoose.connect('mongodb://localhost:27017/test');

module.exports = app
