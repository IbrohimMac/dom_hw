//////////// MODAL ////////////////
const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const modal = document.querySelector(".modal");

btnOpen.addEventListener("click", function (e) {
  modal.classList.add("open");
});

btnClose.addEventListener("click", function (e) {
  modal.classList.remove("open");
});
////

///////// KATALOG ////////////
const loginForm = document.getElementById("login-form");

const toggleForm = document.getElementById("toggleForm");

toggleForm.addEventListener("click", function (e) {
  loginForm.classList.toggle("open");
});
///

///////// KORZINA //////

const cartDiv = document.querySelector(".cart");
const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));

function displayProducts(products) {
  let str = "";
  products.forEach((product) => {
    str += `
      <div class="card">
      <div class="card-content">
      <div class="first">

      <img class="cart-img" src="${product.images[0]}" alt="${product.name}" />
      <div class="cart-h-p">
      <p>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
      <h6>44,50 ₽ за шт.</h6>
      </div>
      <div class="flex gap-3 py-2">
  <div class="cart-onclick">
  <button class="onclick-but1" onclick="decrement(${product.id})">-</button>
  ${product.numOfProduct}
  <button class="onclick-but1" onclick="increment(${product.id})">+</button>
  </div>
      </div>
      <h3 class="cart-price">${product.price}$</h3>
      <div class="flex gap-3 py-2">
      <button class="back-cart" onclick="removeFromCart(${product.id})">Remove</button>
      <button class="back-cart">Checkout</button>
      <button class="back-cart">
            <a href="./products.html" class="btn btn-outline-dark">Back</a>
          </button>
      </div>
          </div>
        </div>
      </div>
    `;
  });
  cartDiv.innerHTML = str;
}
displayProducts(cartProducts);

function removeFromCart(productId) {
  if (confirm("Are you sure you want to remove this product?")) {
    const newCartProducts = cartProducts.filter((p) => p.id !== productId);
    localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
    displayProducts(newCartProducts);
  }
}

function increment(productId) {
  const product = cartProducts.find((pr) => pr.id === productId);
  const newProduct = {
    ...product,
    numOfProduct: product.numOfProduct + 1,
  };
  const newCartProducts = cartProducts((pr) =>
    pr.id === productId ? newProduct : pr
  );
  localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
  displayProducts(newCartProducts);
}

function decrement(productId) {
  const newCartProducts = cartProducts.map((pr) =>
    pr.id === productId
      ? {
          ...pr,
          numOfProduct: pr.numOfProduct > 1 ? pr.numOfProduct - 1 : 1,
        }
      : pr
  );
  localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
  displayProducts(newCartProducts);
}

/////
