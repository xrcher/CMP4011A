document.getElementById("signup-form").addEventListener("submit", function (event) {

  document.getElementById("thanks-message").classList.remove("hide");

  this.elements["Email"].value = "";
});