(function($) {

	// skel
	// 	.breakpoints({
	// 		xlarge:	'(max-width: 1680px)',
	// 		large:	'(max-width: 1280px)',
	// 		medium:	'(max-width: 980px)',
	// 		small:	'(max-width: 736px)',
	// 		xsmall:	'(max-width: 480px)'
	// 	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#hero-area'),
			$header = $('#top-bar');

		// Header.
			// if (skel.vars.IEVersion < 9)
			// 	$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});

})(jQuery);
