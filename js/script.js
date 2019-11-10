function formValidate() {
    event.preventDefault()
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var message = document.getElementById("message");
  if (name == " " || email == "" || message == "") {
    alert("Please enter Valid information");
  } else {
    alert(" Hey, thank you for shopping with us.");
  }
}
