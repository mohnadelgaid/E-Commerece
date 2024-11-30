///////////////// Display Data ///////////////////
let allProducts = JSON.parse(localStorage.getItem("allProduct"));
let pro_container = document.getElementById("show_products");
allProducts.map((el) => {
  pro_container.innerHTML += `
    <div class="pro">
    <img src= ${el.img} alt="" />
    <div class="des">
      <span>Brand:${el.Brand}</span>
      <a class="title" onclick="saveItemData(${el.id})" role="title">${el.title}</a>
      <div class="start">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-half"></i>
      </div>
      <div class="price">
      <h4> ${el.price} EGP</h4>
      <div class="icons">
      <a class="cart" role="cart"><i class="bi bi-cart3" onclick="addToCart(${el.id})"></i></a>
      </div>
      </div>
    </div>
  </div>
    `;
});
////////// addToCart /////////
let ProductToLocalStarage = localStorage.getItem("productInCart")
  ? JSON.parse(localStorage.getItem("productInCart"))
  : [];
function addToCart(item) {
  if (localStorage.getItem("email")) {
    let choosenProduct = allProducts.find((e) => e.id == item);
    let items = ProductToLocalStarage.some((i) => i.id === choosenProduct.id);
    if (items) {
      ProductToLocalStarage = ProductToLocalStarage.map((e) => {
        if (e.id == choosenProduct.id) e.qty += 1;
        return e;
      });
    } else {
      ProductToLocalStarage.push(choosenProduct);
    }
    localStorage.setItem("productInCart", JSON.stringify(ProductToLocalStarage));
    updateNumberOfItem();
  } else {
    // window.location.href ="../pages/login.html";
    alert("go to login");
  }
}

////////////////////////////////////
function saveItemData(id) {
  console.log(id);
  localStorage.setItem("productId", id);
  window.location.href = "../pages/Single-page.html";
}
/////////////////////
