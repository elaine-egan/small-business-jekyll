//jQuery to collapse the navbar on scroll
/*$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});*/

/*

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top -150
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

*/
// Smoothscroll see: http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery

      $('a[href^="#internal"]').on('click',function (e) {

	    e.preventDefault();

          var target = this.hash;

	        var $target = $(target);

          $('html, body').stop().animate({

               'scrollTop': $target.offset().top -20

          }, 300, 'swing');

      });

// mobile nav toggle - close the menu when an item is clicked
	$('.nav a').on('click', function(){
	if ($(document).width() <= 767){
	$(".navbar-toggle").click();
	}

});

// Back to Top Navigation //

	// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('#go-top').fadeIn(200);
				} else {
					$('#go-top').fadeOut(200);
				}
			});

	// Animate the scroll to top
			$('#go-top').click(function(event) {
				event.preventDefault();

				$('html, body').animate({scrollTop: 0}, 300);
			})
