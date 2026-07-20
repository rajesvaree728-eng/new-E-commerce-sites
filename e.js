
let slides = document.querySelectorAll(".slide");
let index = 0;

// Show slide
function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.style.left = (idx - i) * 100 + "%";
  });
}

// Button navigation
document.querySelector(".next").onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
  updateDots();
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

showSlide(index);

// Dots
let dotsContainer = document.querySelector(".dots");

// Create dots
slides.forEach((_, i) => {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  dot.onclick = () => {
    index = i;
    showSlide(index);
    updateDots();
  };
  dotsContainer.appendChild(dot);
});

// Update dots
function updateDots() {
  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

updateDots();

// Auto slide every 2 seconds
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
  updateDots();
}, 2000);

// Touch swipe
let startX = 0;
let endX = 0;

document.querySelector(".slider").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector(".slider").addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    index = (index + 1) % slides.length;
    showSlide(index);
    updateDots();
  }

  if (endX - startX > 50) {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
    updateDots();
  }
});
function addToWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (!wishlist.includes(id)) {
    wishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to Wishlist ❤️");
  } else {
    alert("Already in Wishlist ❤️");
  }
}

      
