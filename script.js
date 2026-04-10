let slideindex = 0;
showSlides(slideindex);

function changeSlides(n) {
    showSlides(slideindex += n);
}

function showSlides(n) {    
    let slides = document.getElementsByClassName("MySlide");
    let dots = document.getElementsByClassName("dot");
    if (n >= slides.length) {slideindex = 0}
    if (n < 0) {slideindex = slides.length - 1;}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }   
    slides[slideindex].style.display = "block";
    dots[slideindex].className += " active";
}
setInterval(() => changeSlides(1), 5000);