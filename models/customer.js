var mongoose = require("mongoose");

var CustomerSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile_no: String,
    dob: String
});

module.exports = mongoose.model("Customer", CustomerSchema);
