const dot = document.querySelector(".dot");
const more = document.querySelector(".more");
const readBtn = document.querySelector(".readBtn");
let text1 = "Read less"
let text2 = "Read more"


readBtn.addEventListener("click", () => {
   dot.classList.toggle("toogle-dots");
   more.classList.toggle("toogle-more");
   readBtn.textContent = readBtn.textContent === text1 ? text2 : text1;
});
