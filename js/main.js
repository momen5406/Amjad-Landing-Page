const menuBTN = document.querySelector("#menuBtn");
const exitBTN = document.querySelector("#exitBtn");
const menu = document.querySelector("#menu");
const menuLinks = document.querySelectorAll("#menu a");

function openMenu() {
  menu.classList.remove("-translate-y-full");
  setTimeout(() => {
    exitBTN.classList.remove("hidden");
  }, 300);
}

function closeMenu() {
  menu.classList.add("-translate-y-full");
  setTimeout(() => {
    exitBTN.classList.add("hidden");
  }, 300);
}

menuBTN.addEventListener("click", () => {
  openMenu();
});

exitBTN.addEventListener("click", () => {
  closeMenu();
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
