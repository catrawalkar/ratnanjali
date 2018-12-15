var counter = 1;
// var i;
var totalPrice = 0;

function updatePrice(i) {
    var a = document.getElementById('rate' + i).value;
    var b = document.getElementById('weight' + i).value;
    var c = a * b;
    document.getElementById('price' + i).value = c;
    updateTotal();
}

function updateTotal() {
    var totalPrice = 0;
    for (var i = 1; i <= counter; i++) {
        if (document.getElementById('price' + i) != null) {
            totalPrice += Number(document.getElementById('price' + i).value);
        }
    }
    document.getElementById('total').value = totalPrice;
}

function removeItem(i) {
    document.getElementById('item-group' + i).remove();
    updateTotal();
}



$(document).ready(function() {
    var content = "";

    showContent();

    showTotal();

    $("#add_item").click(function() {
        counter++;
        showContent();
    });

    function showTotal() {
        document.getElementById("total").innerHTML = totalPrice;
    }

    function showContent() {
        contentCreator();
        $("#particulars").append(content);
    }

    function contentCreator() {
        content =
            '<div class="row" id="item-group' + counter + '">\
      <div class="col-4">\
      <div class="form-group">\
      <label for="item' + counter + '">Item:</label>\
      <input id="item' + counter + '" class="form-control" name="order[item]" type="text" placeholder="Enter Item details">\
      </div>\
      </div>\
      <div class="col-2">\
      <div class="form-group">\
      <label for="rate' + counter + '">Rate:</label>\
      <input id="rate' + counter + '" class="form-control" min="0" name="order[rate]" type="number" placeholder="Rate"\
      oninput="updatePrice(' + counter + ');">\
      </div>\
      </div>\
      <div class="col-2">\
      <div class="form-group">\
      <label for="weight' + counter + '">Weight:</label>\
      <input id="weight' + counter + '" class="form-control" min="0.01" name="order[weight] type="number" placeholder="Weight"\
      oninput="updatePrice(' + counter + ');">\
      </div>\
      </div>\
      <div class="col-2">\
      <div class="form-group">\
      <label for="price' + counter + '">Price:</label>\
      <input id="price' + counter + '" class="form-control" type="number" name="order[price] placeholder="Price" readonly value="0">\
      </div>\
      </div>\
      <div class="col-2">\
      <button class="btn btn-danger" id="del_item' + counter + '" style="margin-top: 32px;" onclick="\
      removeItem(' + counter + ');\">\
      <i class = "fa fa-trash"> </i>\
      </button >\
      </div>\
      </div>';
    }

    // $("#submit_Invoice").click(function() {
    //   var name_valid = $("#name").val();
    //   var email_valid = $("#email").val();
    //   var mobile_no_valid = $("#mobile_no").val();
    //   var date_of_birth_valid = $("#date_of_birth").val();
    //   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //   var items = [];
    //   var rates = [];
    //   var weights = [];
    //   var prices = [];

    //   for (var i = 1; i < counter; i++) {
    //     if (document.getElementById('price' + i) != null) {
    //       items.push(document.getElementById('item' + i));
    //       alert(document.getElementById('item' + i));
    //       alert(items);
    //       rates.push(document.getElementById('rate' + i));
    //       weights.push(document.getElementById('weight' + i));
    //       prices.push(document.getElementById('price' + i).value);
    //     }
    //   }
    //   var items_joined = items.join(',');
    //   var rates_joined = rates.join(',');
    //   var weights_joined = weights.join(',');
    //   var prices_joined = prices.join(',');
    //   var total = Number(document.getElementById('total').innerHTML);
    //   if (name_valid.length == 0) {
    //     document.getElementById("name").classList.add("is-invalid");
    //     document.getElementById("name").focus();
    //   } else if (email_valid.length == 0 | reg.test(email_valid) == false) {
    //     document.getElementById("email").classList.add("is-invalid");
    //     document.getElementById("email").focus();
    //   } else if (mobile_no_valid.length == 0 | mobile_no_valid < 6999999999 | mobile_no_valid > 9999999999) {
    //     document.getElementById("mobile_no").classList.add("is-invalid");
    //     document.getElementById("mobile_no").focus();
    //   } else if (date_of_birth_valid.length == 0) {
    //     document.getElementById("date_of_birth").classList.add("is-invalid");
    //     document.getElementById("date_of_birth").focus();
    //   } else if (total == 0) {
    //     document.getElementById("item" + counter).classList.add("is-invalid");
    //     document.getElementById("item" + counter).focus();
    //   } else {
    //     $.get("new_order.php", {
    //       "button": "new_order",
    //       "name_valid": name_valid,
    //       "email_valid": email_valid,
    //       "mobile_no_valid": mobile_no_valid,
    //       "date_of_birth_valid": date_of_birth_valid,
    //       "total": total,
    //       "items": items_joined,
    //       "rates": rates_joined,
    //       "weights": weights_joined,
    //       "prices": prices_joined
    //     }, function (data) {
    //       alert(data);
    //       alert("Thank you for your response!");
    //       $("#name").val("");
    //       document.getElementById("name").classList.remove("is-invalid");
    //       $("#email").val("");
    //       document.getElementById("email").classList.remove("is-invalid");
    //       $("#mobile_no").val("");
    //       document.getElementById("mobile_no").classList.remove("is-invalid");
    //       $("#date_of_birth").val("");
    //       document.getElementById("date_of_birth").classList.remove("is-invalid");
    //     });
    //   }
    // });
    // $("#submit_Invoice ").click(function() {
    //     var mysql = require('mysql')
    //     var connection = mysql.createConnection({
    //         host: 'localhost',
    //         user: 'root',
    //         password: '',
    //         database: 'ratnanjali'
    //     });

    //     connection.connect()

    //     connection.query('SELECT * from customer', function(err, rows, fields) {
    //         if (err) throw err

    //         console.log('The solution is: ', rows[2].fields[2])
    //     })

    //     connection.end()
    // });
});
