function sidebarFunc(){ 

// ! home sidebar start

// const btnOpenSisebar = document.getElementsByClassName("header-mobile"); 
//  array şeklinde ulaşıyor biz tekli olarak ulaşmak istiyoruz
const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSidebar = document.querySelector("#close-sidebar");
btnOpenSidebar.addEventListener("click", function () {
  sidebar.style.left = "0";
  // sidebar.style.zIndex = "2";
});

//  mobil menüyü x e  tıklandığında kapatıyoruz
btnCloseSidebar.addEventListener("click", function () {

  sidebar.style.left = "-100%";

});

// click outside start 
//  mobil menüyü dışarı tıklandığında kapatıyoruz

document.addEventListener("click", function (event) {
  if (!event.composedPath().includes(sidebar) &&
    !event.composedPath().includes(btnOpenSidebar)) {
    sidebar.style.left = "-100%";
  }


});

// click outside end

// ! home sidebar end


}

function searchModalFunc(){ 

// ! modal search button start

const btnOpenSearch = document.querySelector(".serach-button");
const btnCloseSearch = document.getElementById("close-search");
const modalSearch = document.getElementsByClassName("modal-search");
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");

// ? modal serch açılıyor
btnOpenSearch.addEventListener("click", function () {
  modalSearch[0].style.visibility = "visible";
  modalSearch[0].style.opacity = 1;

});

// ? modal serch kapanıyor

btnCloseSearch.addEventListener("click", function () {
  modalSearch[0].style.visibility = "hidden";
  modalSearch[0].style.opacity = 0;

});


//  ? click outside dışarı tıklandığında kapatıyoruz

document.addEventListener("click", function (e) {

  if (!e.composedPath().includes(modalSearchWrapper[0]) &&
    !e.composedPath().includes(btnOpenSearch)) {

    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = 0;
  }

  // console.log();


});



// .serach-button
// ! modal search button end


}


function headerFunc(){ 

    sidebarFunc();
    searchModalFunc();

}

export default headerFunc();