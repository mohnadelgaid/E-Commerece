let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn_login = document.querySelector(".btn-login");

let getEmail = localStorage.getItem("email");
let getPass = localStorage.getItem("pass");
let message_error = document.querySelector(".message-error");

btn_login.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value === "" || password.value === "") {
    // alert("enter all Data");
    message_error.innerHTML = `<p class="message">
    enter All Data.</p>`;
  } else {
    if (getEmail && getPass) {
      if (email.value !== getEmail || password.value !== getPass) {
        message_error.innerHTML = `<p class="message">
              Your email and password do not match. <br/>
              please try again.</p>`;
      } else {
        window.location.href = "../index.html";
      }
    }else{
      message_error.innerHTML = `<p class="message">
      Your not have an account.</p>`;
    }
  }
});
