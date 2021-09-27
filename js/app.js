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

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

var navbar = document.querySelector("nav #navbar__list");

for (let i = 1; i <= 5; i++) {
  var liElement = document.createElement("li");
//   var sectionId = sections[i].getAttribute("id");
  navbar.appendChild(liElement);
  liElement.innerHTML = `<a href="#section${i}" class="menu__link">Section ${i}</a>`;
}

// Scroll to section on link click
// function scrollToSection() {
//   var linkClick = document.querySelector("nav a");
//   linkClick.forEach(a => {
//     a.addEventListener("click", function(e) {
//       e.preventDefault();
//     //   var hrefElement = a.getAttribute("href");
//       var sectionId = document.querySelector(a.getAttribute("href"));
//       sectionId.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//         inline: "nearest",
//       });
//     });
//   });
// }
// scrollToSection();
let linkClick = document.querySelectorAll("nav a");
// console.log(linkClick);
  linkClick.forEach(a => {
    a.addEventListener("click", function(e) {
      e.preventDefault();
    //   var hrefElement = a.getAttribute("href");
      var sectionId = document.querySelector(a.getAttribute("href"));
      sectionId.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  });


// linkClick.

// Set sections as active

// var sections = document.querySelectorAll("section");
window.onscroll = function () {
  sections.forEach((section) => {
    if (
      section.getBoundingClientRect().top >= -400 &&
      section.getBoundingClientRect().top <= 150
    ) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
};
