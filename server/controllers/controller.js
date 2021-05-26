const orders= require('../models/OrderModel');

module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },
    hello_name: (req, res) => {
        res.json({"message": `Hello ${req.params.name}!`});
    },
    enter_order: (req, res) => {
        orders.create(req.body.order)
        .then(orderData => {
            console.log(orderData);
            res.json({"message": "OK", data: orderData});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    },
    get_orders_length: (req, res) => {
        orders.countDocuments()
        .then(orderData => {
            console.log(orderData);
            res.json({orderData});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    },
    get_order: (req, res) => {
        orders.findOne({order_num: req.params})
        .then(orderData => {
            console.log(orderData);
            res.json({data:orderData});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    }

};