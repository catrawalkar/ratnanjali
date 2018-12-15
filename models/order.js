var mongoose = require("mongoose");

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

module.exports = mongoose.model("Order", OrderSchema);
