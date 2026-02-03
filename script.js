function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

document.querySelectorAll(".nav a").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    scrollToSection(link.getAttribute("href").replace("#",""));
  });
});

document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  document.getElementById("formMsg").textContent="Thank you! Our advisor will contact you shortly.";
  this.reset();
});


// ===== INFINITE REVIEW SCROLLER =====
const reviewTrack = document.querySelector(".review-track");
let scrollAmount = 0;
let speed = 0.5; // lower = slower

// Duplicate reviews for infinite effect
reviewTrack.innerHTML += reviewTrack.innerHTML;

function autoScrollReviews() {
  scrollAmount += speed;
  if (scrollAmount >= reviewTrack.scrollWidth / 2) {
    scrollAmount = 0;
  }
  reviewTrack.style.transform = `translateX(-${scrollAmount}px)`;
  requestAnimationFrame(autoScrollReviews);
}

autoScrollReviews();
