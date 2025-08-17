const menuBTN = document.querySelector("#menuBtn");
const exitBTN = document.querySelector("#exitBtn");
const menu = document.querySelector("#menu");

menuBTN.addEventListener("click", () => {
  menu.classList.remove("-translate-y-full");
  setTimeout(() => {
    exitBTN.classList.remove("hidden");
  }, 300);
});

exitBTN.addEventListener("click", () => {
  menu.classList.add("-translate-y-full");
  setTimeout(() => {
    exitBTN.classList.add("hidden");
  }, 300);
});
