// ! slider start


  let slideIndex = 1;
showSlides(slideIndex);

// ? otomatik dönüş için
setInterval(() => {
  showSlides((slideIndex += 1));
  // console.log("Selam şenol");
}, 4000);

function plusSlide(n) {
  showSlides((slideIndex += n));
}


// ? tıklanaan dots a gitsin diye

function currentSlide(n) {
  showSlides((slideIndex = n));
}



function showSlides(n) {
  const slides = document.getElementsByClassName("slider-item");
  const dots = document.getElementsByClassName("slider-dot");
  if (n > slides.length) {

    slideIndex = 1;
  }


  if (n < 1) {

    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }

  for (let i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    // console.log(dots);
  }



  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";


}



// export default sliderFunc();

// ! slider end