var mongoose = require("mongoose");
var AutoIncrement = require('mongoose-sequence')(mongoose);

var OrderSchema = new mongoose.Schema({
    item: [{ type: String }],
    rate: [{ type: String }],
    weight: [{ type: String }],
    price: [{ type: String }],
    total: { type: String },
    customer: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer"
        },
        name: String
    },
    date: { type: Date, default: Date.now },
    isComplete: { type: Boolean, default: 0 }
});

OrderSchema.plugin(AutoIncrement, { inc_field: 'orderId' });

module.exports = mongoose.model("Order", OrderSchema);
