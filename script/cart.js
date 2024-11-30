
const tbody_in_table = document.querySelector("#tbody_in_table");
const empty_cart = document.querySelector(".empty_cart");
const table = document.querySelector("table");
const clear = document.querySelector("#clear");
let allProductInCart = localStorage.getItem("productInCart");

function drawCartProductsUI(ProductInCart = []) {
  let allProductInCart =
    JSON.parse(localStorage.getItem("productInCart")) || ProductInCart;
  if (allProductInCart.length !== 0) {
    table.style.display = "block";
    clear.style.display = "block";
    empty_cart.style.display = "none";
  } else {
    table.style.display = "none";
    clear.style.display = "none";
    empty_cart.style.display = "block";
    return; // Exit function if cart is empty
  }
  tbody_in_table.innerHTML = ""; // Clearing table content before drawing
  allProductInCart.forEach((item) => {
    tbody_in_table.innerHTML += `
    <tr>
    <td><a
    onclick="removeItemFromCart(${item.id})"><i class="bi bi-x"></i></a></td>
    <td><img src=${item.img} alt=""/></td>
    <td class="title">${item.title}</td>
    <td> ${item.price} EGP</td>
    <td><input type="number" value="${item.qty}" /></td>
    <td> ${item.price * item.qty } EGP</td>
    </tr>
    `;
  });
}
drawCartProductsUI();
function removeItemFromCart(id_from_btn) {
  let allProductInCart = localStorage.getItem("productInCart");
  if (allProductInCart) {
    let items = JSON.parse(allProductInCart).filter(
      (item) => item.id !== id_from_btn
    );
    localStorage.setItem("productInCart", JSON.stringify(items));
    drawCartProductsUI(items);
  }
}
// clear cart
let btn_clear = document.querySelector(".btn_clear");

//clear cart
btn_clear.addEventListener("click", () => {
 localStorage.removeItem("productInCart")
  drawCartProductsUI();
  window.location.reload();
});