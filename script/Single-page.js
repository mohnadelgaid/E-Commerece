
let allProductfromlocalstorage = JSON.parse(localStorage.getItem("allProduct"));
let prodetails = document.querySelector("#prodetails");


allProductfromlocalstorage.find(element => {
    if (element.id == localStorage.getItem("productId")){
        prodetails.innerHTML = `
        <div class="single-pro-image">
        <img src=${element.img} id="mainImg" alt="" />
        <div class="small-img-group">
          <div class="small-img-col">
            <img
              src=${element.imgSrc[0]}
              width="100%"
              class="small-img"
              alt=""
            />
          </div>
          <div class="small-img-col">
            <img
            src=${element.imgSrc[1]}
              width="100%"
              class="small-img"
              alt=""
            />
          </div>
          <div class="small-img-col">
            <img
            src=${element.imgSrc[2]}
              width="100%"
              class="small-img"
              alt=""
            />
          </div>
          <div class="small-img-col">
            <img
            src=${element.imgSrc[3]}
              width="100%"
              class="small-img"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="single-pro-details">
        <h6><a href="../index.html" aria-label="home" class="home">Home</a>/${element.type}</h6>
        <h4>${element.title}</h4>
        <p style="color:#088178" class="pr">${element.price} EGP</p>
        <p style="color:#465b52">Availability: In Stock</p>
        <label for="se"></label>
        <select id="se">
          <option>Select Size</option>
          <option>XL</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Large</option>
        </select>
        <label for="s"></label>
        <input type="number" value="1" id="s"/>
        <button class="normal">Add to Cart</button>
        <h4>Product Details</h4>
        <span
          >${element.description}</span
        >
      </div>
        `
    }
});

let small_img = document.querySelectorAll(".small-img");
let mainImg = document.querySelector("#mainImg");
small_img.forEach((el) => {
  el.addEventListener("click", () => {
    mainImg.src = el.src;
  });
});