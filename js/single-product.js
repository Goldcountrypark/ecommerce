import { thumbsActiveFunc } from "./single-product/thumbsActive.js";
import { singleThumbsFunc } from "./glide.js";
import zoomFunc from "./single-product/zoom.js";
import colorsFunc from "./single-product/colors.js";
import valuesFunc from "./single-product/values.js";
import tabsFunc from "./single-product/tabs.js";
import commentsFunc from "./single-product/comments.js";


const productId = localStorage.getItem("productId") ?
  JSON.parse(localStorage.getItem("productId")) :
  localStorage.setItem("productId", JSON.stringify(1));

const products = localStorage.getItem("products") ?
  JSON.parse(localStorage.getItem("products")) :
  localStorage.setItem("products", JSON.stringify([]));

const productFind = products.find((item) => item.id === Number(productId));


// console.log(productFind);
//! product name
const productTitle = document.querySelector(".product-title");
productTitle.innerHTML = productFind.name;
//! product price
const oldPriceDOM = document.querySelector(".old-price");
const newPriceDOM = document.querySelector(".new-price");
oldPriceDOM.innerHTML = `$${productFind.price.oldPrice.toFixed(2)}` ;
newPriceDOM.innerHTML = `$${productFind.price.newPrice.toFixed(2)}` ;
//! single-image 
const singleImageDOM = document.querySelector("#single-image");
singleImageDOM.src = productFind.img.singleImage;
//!  thumbs resimleri
const galleryThumbsDOM = document.querySelector(".gallery-thumbs");
let result = "";
productFind.img.thumbs.forEach((item) => {

  result += ` 
        <li class="glide__slide">
        <img
          src=${item}
          class="img-fluid"
          alt=""
        />
      </li>
        `;

});

galleryThumbsDOM.innerHTML = result;
singleThumbsFunc();
thumbsActiveFunc();

//! single-product.html den thumbs resimin ilkini seçmek için

const productThumbItem = document.querySelectorAll(".product-thumb .glide__slide img");
productThumbItem[0].classList.add("active");

// ! single-product.html den sepete ürün ekleme

// ? cart bilgilerimizi kontrol ediyoruz(cart.html de ürün varmı diye)
// ? varmı diye bakıyoruz varsa JSON.parse ile jacascripte çeviriyoruz 
// ? yoksa boş bir cart atıyoruz dizine 
// ? const olamaz çünkü aşağıda cart güncellenecek (let yapacağız)

let cart = localStorage.getItem("cart") ?
  JSON.parse(localStorage.getItem("cart")) : [];

// ? single-product.html deki ürün id si 
// ? ile cart.html de var ise ürün id si eşleşiyormu

const findCart = cart.find((item) => item.id === productFind.id);
// ? ekleme buttona (#add-to-cart) idsi ile ulaşıyoruz
// ? eğer ürün cart.html de var ise disable ediyoruz 
// ? bir daha işlem yapmasın diye
// const btnAddToCart = document.querySelector("#add-to-cart");
const btnAddToCart = document.getElementById("add-to-cart");
const quantityDOM  = document.getElementById("quantity");
let cartItems = document.querySelector(".header-cart-count");

if (findCart) {
  // aynısından var ise button disabled edildi
  btnAddToCart.setAttribute("disabled", "disabled");

} else {
  // aynısından yok ise ekleme işlemi başlıyor

  btnAddToCart.addEventListener("click", function () {

     cart.push({...productFind, quantity:Number(quantityDOM.value)});
       // aynısından var ise button disabled edildi
      btnAddToCart.setAttribute("disabled", "disabled");
      // ekliyoruz
     localStorage.setItem("cart",JSON.stringify(cart));
     cartItems.innerHTML = cart.length;
    //  console.log(cart);
    //  console.log(typeof Number(quantityDOM.value)); 
  });



}
// console.log(btnAddToCart);
