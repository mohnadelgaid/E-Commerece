let username = document.querySelector(".username");
let email = document.querySelector(".email");
let pass = document.querySelector(".pass");
let passConfirm = document.querySelector(".passConfirm");
let btn_register = document.querySelector(".btn-register");
let emailValid = /\w+@\w+.com/g;
let emailInvalid = document.querySelector(".emailInvalid");
let passInvalid = document.querySelector(".passInvalid");
let message_error_reg = document.querySelector(".message-error-reg");


btn_register.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value === "" || email.value === "" || pass.value === "") {
    message_error_reg.innerHTML = `<p class="messageReg">
    Data must not be empty</p>`;
  } else if (!email.value.match(emailValid)) {
    emailInvalid.style.display = "block";
  }else if(pass.value !== passConfirm.value){
    passInvalid.style.display = "block";
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("pass", pass.value);
    setTimeout(() => {
      window.location.href = "./login.html";
    }, 1000);
  }
});
