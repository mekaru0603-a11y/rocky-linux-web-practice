const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const messageButton = document.querySelector("#messageButton");
const message = document.querySelector("#message");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

messageButton.addEventListener("click", () => {
    message.textContent = "JavaScriptが正常に動作しています。";
});
