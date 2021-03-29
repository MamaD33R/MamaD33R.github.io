// These functions open and close contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This displays the first image in the slideshow when page loads
var slideIndex = 1;
showSlides(slideIndex);

// This changes the slide when the arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This function changes the slide when dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // Takes all elements w class and stores them in variable array "slides"
    var dots = document.getElementsByClassName("dot"); // Takes all elements w class name "dots" and stores them in a variable array
    if (n > slides.length) {slideIndex = 1}; // If n (number passed into function) less than 1, slideIndex is set to the length of the array slides
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // This for loop takes each item in the slides array and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in dots array and removes active which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; // This displays image in the slideshow
    dots[slideIndex - 1].className += " active"; // This adds active styling to the dot associated with image
}