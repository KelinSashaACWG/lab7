'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeCtr').click(likeIt);
}
function likeIt(e) {
  console.log("I like it...");
	// Prevent following the link
	e.preventDefault();
}