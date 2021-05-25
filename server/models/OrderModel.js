const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    order_num: {type: Number, required:true},
    name: {type: String, required:true},
    appetizer: {type: String, required:true},
    entree: {type: String, required:true},
    drink: {type: String, required:true},
    comments: {type: String, required:false},
    ready:{type: Boolean, required:true}
});

const orders = mongoose.model('orders', orderSchema);

module.exports = orders;