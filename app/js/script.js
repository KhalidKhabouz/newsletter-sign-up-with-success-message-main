console.log("Hello World!");
const card = document.getElementById("newsletter-card");
const input = document.getElementById("email-input");
const submitBtn = document.getElementById("submit-bnt");
const modalEl = document.getElementsByClassName("modal-success")[0];
const modalContainer = document.getElementsByClassName("modal-container")[0];
const dismissBtn = document.querySelector(".modal-success__dismiss-btn");
const errorTxt = document.querySelector('.error-txt');
const submitedEmail = document.getElementById("submited-email")
var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

function submit() {
  if (!input.value.match(validRegex)) {
    errorTxt.style.display = "block";
    input.style.color = "var(--tomato)";
    input.style.borderColor = "var(--tomato)";
    input.classList.add('invalid-input');
  } else {
    modalEl.style.display = "flex";
    modalContainer.style.display = "block";
    submitedEmail.innerHTML =  input.value;
  }
}

function hideModal() {
  modalEl.style.display = "none";
  modalContainer.style.display = "none";
  input.classList.remove('invalid-input');
  errorTxt.style.display = "none";
  input.style.color = "var(--grey)";
  input.style.borderColor = "var(--grey)";
  input.value = "";
}

submitBtn.addEventListener("click", submit);
dismissBtn.addEventListener("click", hideModal);
