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

var linkClick = document.querySelectorAll("nav a");
linkClick.forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    var sectionHref = document.querySelector(a.getAttribute("href"));
    sectionHref.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
});

// when click on link is active
var liLinks = navbar.querySelectorAll("li");
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
      let currentId = section.getAttribute("id");
      linkClick.forEach((elem) => {
        elem.classList.remove("active");
      });     
      let element = `a[href="#${currentId}"]`;
      let aId = document.querySelector(element);
      aId.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
    }
  });
};
