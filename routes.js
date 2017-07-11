const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Item = require('./models/item.js');
const Purchase = require('./models/purchase.js');
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
// Replace "test" with your database name.

router.get ('/api/customer/items', function (req, res) {
	Item.find().then(function(items){
		console.log(items);
		///HOW DO I CONSOLE.LOG THIS???
		res.json({items});
	}).catch(function(err){
		console.log(err.message)
	})
});

// router.post ('/api/customer/items/:itemId/purchases', function (req, res) {
// 	Item.find().then(function(items){
// 		res.json({items})
// 	}).catch(function(err){
// 		console.log(err.message)
// 	})
// });

router.post ('/api/customer/items/:itemId/purchases', function (req, res) {
	Item.find(id:req.params.itemId){
		res.json({items})
	}).catch(function(err){
		console.log(err.message)
	})
});

router.get ('/api/customer/items', function (req, res) {
	Purchase.find().then(function(purchases){
		res.json({purchases})
	}).catch(function(err){
		console.log(err.message)
	})
});

module.exports = router;
