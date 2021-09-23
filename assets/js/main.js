/*!
 *--------------
 * Template Name: EventPlanner - v1.0
 * Template URL: dycodes.github.com/EventPlanner
 * Author: Yusuf Daudu - dyCodes
 * Author URL: github.com/dycodes
 * License: https://dycodes.github.com/EventPlanner/license
 *---------------------------------
 */

/***
 * DOM Selector helper function
 */
const selectElem = (elem, all = false) => {
	elem = elem.trim();
	if (all) {
		return [...document.querySelectorAll(elem)];
	} else {
		return document.querySelector(elem);
	}
};

/***
 * Scrolls to an element with header offset
 */
const scrollto = elem => {
	let elementPos = selectElem(elem).offsetTop;
	// header offset - 60
	window.scrollTo({
		top: elementPos - 60,
		behavior: 'smooth'
	});
};

/***
 * Scroll to contact section on contact-us button click
 */
selectElem('#contact_btn').addEventListener('click', function(e) {
	e.preventDefault();
	scrollto(this.hash);
});

/***
 * Scroll to target section on navlink click
 */
let navLinks = selectElem('#navbar .nav_link', true);
navLinks.forEach(navLink => {
	navLink.addEventListener('click', e => {
		e.preventDefault();
		scrollto(navLink.hash);
		// Remove the active class from all navlinks
		navLinks.forEach(navLink => navLink.classList.remove('active'));
		selectElem('#navbarContent').classList.remove('show');
		navLink.classList.add('active');
	});
});

/***
 * Set navLinks active state on scroll
 */
const navLinksActive = () => {
	let position = window.scrollY + 200;
	navLinks.forEach(navLink => {
		let section = selectElem(navLink.hash);
		if (!section) return;
		if (
			position >= section.offsetTop &&
			position <= section.offsetTop + section.offsetHeight
		) {
			navLink.classList.add('active');
		} else {
			navLink.classList.remove('active');
		}
	});
};

/***
 * Header fixed top on scroll
 */
const headerOnScrollEffect = () => {
	let header = selectElem('#header');
	if (window.pageYOffset > 50) {
		header.classList.add('onScroll');
	} else {
		header.classList.remove('onScroll');
	}
};

/***
 * Show whatsapp button
 */
const WhatsappButton = () => {
	let waButton = selectElem('#whatsapp_button');
	if (window.pageYOffset > 500) {
		waButton.classList.add('_show');
	} else {
		waButton.classList.remove('_show');
	}
};

/***
 * Window onScroll Event
 */
window.addEventListener('scroll', () => {
	// navLinksActive function call
	navLinksActive();
	// headerOnScrollEffect function call
	headerOnScrollEffect();
	// WhatsappButton function call
	WhatsappButton();
});

/***
 * Window onLoad Event
 */
window.addEventListener('load', () => {
	// navLinksActive function call
	navLinksActive();
	// Scroll to section with hash link in the url on page load
	if (window.location.hash) {
		if (selectElem(window.location.hash)) {
			scrollto(window.location.hash);
		}
	}
});

/***
 * GALLERY LIGHT INIT
 */
const galleryLightbox = GLightbox({
	selector: '.glightbox'
});
