function formValidate() {
    event.preventDefault()
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var message = document.getElementById("message");
  if (name == "" || email == "" || message == "") {
    alert("Please enter Valid information");
  } else {
    alert(" Hey, thank you for shopping with us.");
  }
};
function Results (type,size,crust,toppings) {
    this.type = type;
    this.size= size;
    this.crust= crust;
    this.toppings=toppings;
};
Results.prototype.order = function() {
    return "You hav made an order of " + this.type + " with " + this.size + " with " + this.crust + " crust " + " and" + this.toppings + " toppings."
};
function TotalPrice (price, quantity, delivery) {
    this.price= price;
    this.quantity=quantity;
    this.delivery=delivery;
};
TotalPrice.prototype.finalTotal = function () {
    return this.price * this.quantity + this.delivery;
};

var sizePrices = [1200, 800, 600]
var deliveryPrices = [0, 200];
$(document).ready(function(){
    var pizzaType = $('#type').val();
    var pizzaSize = parseInt($('#size').val());
    var pizzaCrust = $('#crust').val();
    var pizzaTop = $('#topping').val();
    var pizzaQty = parseInt($('#quantity').val());
    var pizzaPick = parseInt($('#delivery').val());
    var price = sizePrices[pizzaSize - 1];
    var DeliveryCost = deliveryPrices[pizzaPick - 1];
});
 