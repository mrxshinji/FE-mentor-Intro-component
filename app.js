
// https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      );
  };

function submitForm() {
    const email = document.getElementById("introForm").email.value;
    const firstName = document.getElementById("introForm").firstName.value;
    const lastName = document.getElementById("introForm").lastName.value;
    const password = document.getElementById("introForm").password.value;
    if (!validateEmail(email)) {
        error("email")
        $(".inp-email").attr("placeholder","email@example.com")
        $(".inp-email").addClass("red")
    }
    if (!firstName) {
      error("fName")
    }
    if (!lastName) {
      error("lName")
    }
    if (!password) {
      error("pwd")
    }
} 

function error(name) {
  $(`#${name}P`).css("display", "block")
  $(`#${name}ErrI`).css("display", "block")
  $(`#${name}ErrI`).css("align-self", "flex-end")
}