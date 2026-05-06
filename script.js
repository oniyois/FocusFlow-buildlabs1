const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const ctaBtn = document.querySelector(".cta-btn");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
  ctaBtn.classList.toggle("open");
});



const container = document.querySelector(".testimonial-container");
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let index = 0;


function showCard(i) {
  cards.forEach(card => card.style.display = "none");
  cards[i].style.display = "block";
}
nextBtn.addEventListener("click", () => { 
    index = (index + 1) % cards.length;
    showCard(index);

});
prevBtn.addEventListener("click", () => {
  index = (index - 1 + cards.length) % cards.length;
  showCard(index);
});
showCard(index);
