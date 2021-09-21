/*!
 *--------------
 * Template Name: EventPlanner - v1.0
 * Template URL: dycodes.github.com/EventPlanner
 * Author: Yusuf Daudu - dyCodes
 * Author URL: github.com/dycodes
 * License: https://dycodes.github.com/EventPlanner/license
 *---------------------------------
 */

// DOM Selector helper function
const selectElem = (elem, all = false) => {
	elem = elem.trim();
	if (all) {
		return [...document.querySelectorAll(elem)];
	} else {
		return document.querySelector(elem);
	}
};

//  Scrolls to an element with header offset
const scrollto = elem => {
	let elementPos = selectElem(elem).offsetTop;
	// header offset - 60
	window.scrollTo({
		top: elementPos - 60,
		behavior: 'smooth'
	});
};

// Remove the active class from all navlinks
const clearActiveClass = () => {
	navLinks.forEach(navLink => navLink.classList.remove('active'));
};
//  Scroll to target section on navlink click
let navLinks = selectElem('#navbar li a', true);
navLinks.forEach(navLink => {
	navLink.addEventListener('click', e => {
		e.preventDefault();
		scrollto(navLink.hash);
		clearActiveClass();
		selectElem('#navbarContent').classList.remove('show');
		navLink.classList.add('active');
	});
});

// Window onScroll Event
window.onscroll = function() {
	let header = selectElem('#header');
	let currentPos = window.pageYOffset;

	// Header fixed top on scroll
	if (currentPos > 50) {
		header.classList.add('onScroll');
	} else {
		header.classList.remove('onScroll');
	}
};

// Scroll to section with hash link in the url on page load
window.addEventListener('load', () => {
	if (window.location.hash) {
		if (selectElem(window.location.hash)) {
			scrollto(window.location.hash);
		}
	}
});

// GALLERY LIGHT INIT
const galleryLightbox = GLightbox({
	selector: '.glightbox'
});
