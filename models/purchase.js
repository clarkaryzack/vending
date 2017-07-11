const mongoose = require('mongoose');
const purchaseSchema = new mongoose.Schema(
	{
		"purchase": {
		 	"status": {type:Boolean},
			// "itemspurchased": [{
			// 	"item":{type:String},
			// 	"quantity":{type:Number}
			// }],
			// "time": {type:new Date()},
		  "data": {
		    "money_given": {type:Number},
		    "money_required": {type:Number}
	  	}
		}
	}
)

const Purchase = mongoose.model('Purchase',purchaseSchema);
module.exports = Purchase;
