console.log("helloooo");

let prodect = [
  {
    img: "imgs/hroses.jpeg",
    title: "Hydrangea Flowers",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/lroses.jpeg",
    title: "Carnation with lemon",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/throses.jpeg",
    title: "Hydrangea, Delphinium and Tulip",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/jroses.jpeg",
    title: "Rose,  Baby Rose, Hydrangea and Orchid.",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/yyroses.jpeg",
    title: "Yellow Lily Vase",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/ohroses.jpeg",
    title: "Orchid ,Tulip and Hydrangea Vase",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/prose.jpeg",
    title: "Rose",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/oroses.jpeg",
    title: "Lily and Baby Orchid",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/troses.jpeg",
    title: "Tulip",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/rtroses.jpeg",
    title: "Roses and tulips",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/roroses.jpeg",
    title: "Roses and baby orchid",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/jjj.jpeg",
    title: "Roses hand bouquet",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/rrose.jpeg",
    title: "Black Box, Red Roses",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/srrose.jpeg",
    title: "Small Black Box, Red Roses",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/wrose.jpeg",
    title: "Black Box, White Roses",
    price: 350,
    inCart: 0,
  },
  {
    img: "imgs/yrose.jpeg",
    title: "Black Box, Yellow Roses",
    price: 350,
    inCart: 0,
  },
];

let carts = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNum(prodect[i]);
    totalCost(prodect[i]);
  });
}

function cartNum(prodect) {
  // console.log("prodect click is", prodect);
  let prosectNum = localStorage.getItem("cartNum");
  prosectNum = parseInt(prosectNum);

  if (prosectNum) {
    localStorage.setItem("cartNum", prosectNum + 1);
    // document.querySelector('cart span').textContent=prosectNum+1;
  } else {
    localStorage.setItem("cartNum", 1);
    // document.querySelector("cart span").textContent = 1;
  }
  setItem(prodect);
}

function setItem(prodect) {
  let cartItems = localStorage.getItem("prodectInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[prodect.title] == undefined) {
      cartItems = {
        ...cartItems,
        [prodect.title]: prodect,
      };
    }
    cartItems[prodect.title].inCart += 1;
  } else {
    prodect.inCart = 1;
    cartItems = {
      [prodect.title]: prodect,
    };
  }
  localStorage.setItem("prodectInCart", JSON.stringify(cartItems));
}

function totalCost(prodect) {
  // console.log("the prodect price is", prodect.price);

  let cartCost = localStorage.getItem("totalCost");

  // console.log("My cart cost is", cartCost);
  // console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + prodect.price);
    alert("Add to cart , Current Total " + cartCost);
  } else {
    localStorage.setItem("totalCost", prodect.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("prodectInCart");
  cartItems = JSON.parse(cartItems);
  let prodectContainer = document.querySelector(".product");
  let cartCost = localStorage.getItem("totalCost");

  console.log(cartItems);
  if (cartItems && prodectContainer) {
    prodectContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      prodectContainer.innerHTML += `


   <div class="cart-item cart-column">
   <img class="cart-item-image" src="${item.img}" width="100" height="100">
   <span class="cart-item-title">${item.title}</span>
</div>
<span class="cart-price cart-column">${item.inCart}</span>
<div class="cart-quantity cart-column">
   <input class="cart-quantity-input" type="number" value="1">
   <span> SA${item.inCart * item.price},00 </span>
   <button class="btn btn-danger" type="button">REMOVE</button>
</div>


  `;
    });
    document.getElementsByClassName("cart-total-price")[0].innerText =
      "SA" + cartCost;
  }
}

displayCart();

let removeCartItemBtn = document.getElementsByClassName("btn-danger");
console.log(removeCartItemBtn);

for (let i = 0; i < removeCartItemBtn.length; i++) {
  let butn = removeCartItemBtn[i];
  butn.addEventListener("click", function (event) {
    let butnClick = event.target;
    butnClick.parentElement.parentElement.remove();
  });
}

function Buy() {
  alert("order was successful ");
}

//==============================================================================================================================
//================================================================================================
//================================================================================================
