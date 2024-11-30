//preload

let preloader = document.querySelector("#preloader");
window.addEventListener("load", () => {
  preloader.style.display = "none";
});

//header

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}

// cart

let cart_user = document.querySelectorAll(".cart-user");
let person = document.querySelectorAll(".person");
let log_out = document.querySelector(".log");

function showCart() {
  if (localStorage.getItem("email")) {
    log_out.style.display = "block";
    for (let x = 0; x < person.length; x++) {
      person[x].style.display = "none";
    }
    for (let i = 0; i < cart_user.length; i++) {
      cart_user[i].style.display = "block";
    }
  }
}

showCart();

// Update Number Of Item
function updateNumberOfItem() {
  let itemsUserCart = 0;
  if (localStorage.getItem("productInCart")) {
    itemsUserCart = JSON.parse(localStorage.getItem("productInCart")).length;
  }
  let items_notification = document.querySelectorAll(".notifiction");
  items_notification.forEach((notification) => {
    notification.innerHTML = itemsUserCart;
  });
}

updateNumberOfItem();

// Log out
log_out.onclick = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("pass");
  localStorage.removeItem("productInCart");
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 1500);
};
