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
function results (type,size,crust,toppings) {
    this.type = type;
    this.size= size;
    this.crust= crust;
    this.toppings=toppings;
};
results.prototype.order = function() {
    return "You hav made an order of " + this.type + " with " + this.size + " with " + this.crust + " crust " + " and" + this.toppings + " toppings."
};
function totalPrice (price, quantity, delivery) {
    this.price= price;
    this.quantity=quantity;
    this.delivery=delivery;
};
totalPrice.prototype.finalTotal = function () {
    return this.price * this.quantity + this.delivery;
};
 