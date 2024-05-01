import headerFunc from "./header.js";
import productsFunc from "./product.js";
import searchFunc from "./search.js";

// !add product to localStorage start
(async function () {

    const photos =await fetch("../js/data.json");
    const data = await photos.json();


    data ? localStorage.setItem("products", JSON.stringify(data)):[];

    productsFunc(data);
    searchFunc(data);
})();

// getData();
// !add product to localStorage end

// !add cartItem localStorage start
const products = localStorage.getItem("products");
const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart") ? 
JSON.parse(localStorage.getItem("cart")).length :"0";

// !add cartItem localStorage end
// localStorage.getItem("products");
// localStorage.setItem("cart", JSON.stringify([]));

//! modal-dialog start

const modalDialogDOM  = document.querySelector(".modal-dialog");
const modalContentDOM = document.querySelector(".modal-dialog .modal-content");
const btnCloseDialog  = document.querySelector(".modal-dialog .modal-close");
   
//? show classını modal-dialog tan siliyoruz 
btnCloseDialog.addEventListener("click",function(){ 
    modalDialogDOM.classList.remove("show");      
});

//? modal-dialog içine basıldığında değilde dışarı basıldığında silinecek

document.addEventListener("click", (e)=>{ 
      if(!e.composedPath().includes(modalContentDOM)){ 

        modalDialogDOM.classList.remove("show"); 
      }
    // console.log(e.target);

});


setTimeout(() =>{ 
    modalDialogDOM.classList.add("show");
},3000);

//! modal-dialog end 
