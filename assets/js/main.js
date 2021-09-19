/*!
 *--------------
 * Template Name: EventPlanner - v1.0
 * Template URL: dycodes.github.com/EventPlanner
 * Author: Yusuf Daudu - dyCodes
 * Author URL: github.com/dycodes
 * License: https://dycodes.github.com/EventPlanner/license
 *---------------------------------
 */

const selectElem = (elem, all = false) => {
	elem = elem.trim();
	if (all) {
		return [...document.querySelectorAll(elem)];
	} else {
		return document.querySelector(elem);
	}
};

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

const galleryLightbox = GLightbox({
	selector: '.glightbox'
});
