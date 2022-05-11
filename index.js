const menuBtn = document.querySelector(".mobile-menu");
const burgerMenu = document.querySelector(".burger-menu");
const aside = document.querySelector("aside");
const email= document.getElementById("email").value

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    burgerMenu.classList.remove("hidden");
    aside.style.backgroundColor = "#0c0d17d2";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    burgerMenu.classList.add("hidden");
    aside.style.backgroundColor = "transparent";
  }
});



