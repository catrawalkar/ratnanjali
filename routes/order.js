var express = require("express");
var router = express.Router({ mergeParams: true });
var Order = require("../models/order");
var Customer = require("../models/customer");

router.get('/', function(req, res) {
    Order.find({ isComplete: false }, function(err, openOrders) {
        if (err) {
            console.log(err);
        }
        Order.find({ isComplete: true }, function(err, completeOrders) {
            if (err) {
                console.log(err);
            }
            else {
                res.render('order/index', { openOrders: openOrders, completeOrders: completeOrders });
            }
        });

    });
});

router.get('/new', function(req, res) {
    res.render('order/new', { customer_id: req.query.customer_id, customer_name: req.query.customer_name });
});

router.post('/', function(req, res) {
    var customer = { id: req.body.customer_id, name: req.body.customer_name };
    req.body.order.customer = customer;
    Order.create(req.body.order, function(err, newOrder) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(newOrder);
        }
    });
    res.redirect('/order');
});

router.get('/:id', function(req, res) {
    Order.findById(req.params.id, function(err, foundOrder) {
        if (err) {
            console.log(err);
        }
        Customer.findById(foundOrder.customer.id, function(err, foundCustomer) {
            if (err) {
                console.log(err);
            }
            res.render('order/show', { order: foundOrder, customer: foundCustomer });
        });
    });
});

// router.put('/:id', function(req, res) {
//     Order.findByIdAndUpdate(req.params.id, { isComplete: true }, function(err, updatedOrder) {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             res.redirect('/order');
//         }
//     });
// });

router.put('/:id', function(req, res) {
    Order.findById(req.params.id, { isComplete: true }, function(err, updatedOrder) {
        if (err) {
            console.log(err);
        }
        updatedOrder.isComplete = !updatedOrder.isComplete;
        updatedOrder.save(function(err, updatedOrder) {
            if (err) {
                console.log(err);
            }
            else {
                res.redirect('/order');
            }
        });
    });
});

module.exports = router;
