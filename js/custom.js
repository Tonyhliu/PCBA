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
			$header = $('#top-bar'),
			$width = $(window).width(),
			$width2 = $(document).width();

			// console.log($width);
			// console.log($width2);

		// Header.
			// if (skel.vars.IEVersion < 9)
			// 	$header.removeClass('alt');

			// console.log($banner.length > 0);
			// console.log($header.hasClass('alt'));
			// console.log($width > 767);

			if ($banner.length > 0
			&&	$header.hasClass('alt') && $width > 767) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			} else if ($width <= 767) {
				$header.removeClass('alt');
			}
	});

})(jQuery);
