document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault();

  document.getElementById("thanks-message").classList.remove("hide");

  this.elements["Email"].value = "";
});