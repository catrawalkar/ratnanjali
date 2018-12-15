var express = require("express");
var router = express.Router({ mergeParams: true });
var Customer = require("../models/customer");

router.get('/new', function(req, res) {
    res.render('customer/new');
});

router.post('/', function(req, res) {
    Customer.create(req.body.customer, function(err, newCustomer) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/order/new?customer_id=' + newCustomer._id + '&customer_name=' + newCustomer.name);
        }
    });
});

module.exports = router;
