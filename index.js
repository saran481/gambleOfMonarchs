$(".next-button").on("click",()=>{
    $(".first-page").hide()
    $(".container-fluid").show()
})

let slideIndex = 0;
let secondSlideIndex = 0;
showSlides();
showSecondSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  //let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";  
 // dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showSecondSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlidesSec");
    //let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    secondSlideIndex++;
    if (secondSlideIndex > slides.length) {secondSlideIndex = 1}    
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
    slides[secondSlideIndex-1].style.display = "block";  
   // dots[slideIndex-1].className += " active";
    setTimeout(showSecondSlides, 2000); // Change image every 2 seconds
  }