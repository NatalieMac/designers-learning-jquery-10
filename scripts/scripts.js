var spotlight = $('<div class="spotlight"></div>').insertAfter('h1');
var highlighted = $('.highlighted');


if ( highlighted.length > 0 ) {
	spotlight.text('In the Spotlight: ' + highlighted.text() );
} else {
	spotlight.text('No animals are in the spotlight');
}
