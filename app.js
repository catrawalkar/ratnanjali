var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

var customerRoutes = require("./routes/customer"),
    orderRoutes = require("./routes/order"),
    indexRoutes = require("./routes/index");

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/ratnanjali", { useNewUrlParser: true });

app.use("/", indexRoutes);
app.use("/customer", customerRoutes);
app.use("/order", orderRoutes);

app.listen(process.env.PORT, process.env.IP, function(req, res) {
    console.log("server started:");
});
