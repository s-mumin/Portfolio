const hamburgerMenuButton = document.querySelector('#hamburger-menu-button')
const navbarCloseButton = document.querySelector('#navbar-close-button')
const heroSection = document.querySelector('#hero-section')
const navbarMenu = document.querySelector('#navbar-menu')

hamburgerMenuButton.addEventListener("click", () => {heroSection.style.zIndex = "-1"; navbarMenu.style.zIndex = "1";})
navbarCloseButton.addEventListener("click", () => {heroSection.style.zIndex = "1"; navbarMenu.style.zIndex = "-1";})




