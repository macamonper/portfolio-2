const menuBtn = document.querySelector(".mobile-menu");
const burgerMenu = document.querySelector(".burger-menu");
const aside = document.querySelector("aside");
const form = document.querySelector("form");
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

  <script src="https://smtpjs.com/v3/smtp.js"></script>;

const sendEmail = () => {
Email.send({
  SecureToken: "af148e3f-1750-4a7f-b94b-a62196f38b92",
  To: "macamonper@gmail.com",
  From: email,
  Subject: "New contact from portfolio",
  Body: "And this is the body",
  Attachments: [
    {
      name: "smtpjs.png",
      path: "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png",
    },
  ],
}).then((message) => alert(message));


};

