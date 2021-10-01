/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
var sections = document.querySelectorAll("section");
const lengthSections = sections.length;
//  console.log(lengthSections);
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".navbar__list");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

// const navLink = document.querySelectorAll("a");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

var navbar = document.querySelector("nav #navbar__list");

for (let i = 1; i <= lengthSections; i++) {
  var liElement = document.createElement("li");
  navbar.appendChild(liElement);
  liElement.innerHTML = `<a href="#section${i}" class="menu__link">Section ${i}</a>`;
}

// Scroll to anchor ID when click link using scrollIntoView

let linkClick = document.querySelectorAll("nav a");
linkClick.forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    var sectionId = document.querySelector(a.getAttribute("href"));
    sectionId.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
});

// when click on link is active
var ul = document.getElementById("navbar__list");
var liLinks = ul.querySelectorAll("li");
liLinks.forEach((li) => {
  li.addEventListener("click", function () {
    liLinks.forEach((liElem) => {
      liElem.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Set sections as active
// when scroll add active class for section and link
window.onscroll = function () {
  sections.forEach((section) => {
    if (
      section.getBoundingClientRect().top >= -400 &&
      section.getBoundingClientRect().top <= 150
    ) {
      section.classList.add("your-active-class");
      var currentId = section.getAttribute("id");
      document.querySelectorAll("nav a").forEach((el) => {
        el.classList.remove("active");
      });
      var selector = `nav a[href="#${currentId}"]`;
      document.querySelector(selector).classList.add("active");
    } else {
      section.classList.remove("your-active-class");
    }
  });
};
