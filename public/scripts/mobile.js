const mobileMenuBtn = document.getElementById("menu-bar-btn");
const mobileMenu = document.getElementById("mobile-menu");

function toggleMenu() {
	mobileMenu.classList.toggle("open");
}

mobileMenuBtn.addEventListener("click", toggleMenu);
