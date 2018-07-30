// JavaScript Document

// WOW Animation
$(document).ready(function() {
    "use strict"; 
    new WOW().init();
});

// Slide Our Guides
$(document).ready(function(){
  $('.customer-logos').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  arrows: true,
	  dots: false,
	  pauseOnHover: true,
	  responsive: [{		 
		  breakpoint: 767,
		  settings: {
			  slidesToShow: 2
		  }
	  }, {
		  breakpoint: 480,
		  settings: {
			  slidesToShow: 1
		  }
	  }]
  });
});
$(document).ready(function(){
  $('.guide-pic').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  arrows: true,
	  dots: true,
	  pauseOnHover: true,
	  responsive: [{		 
		  breakpoint: 767,
		  settings: {
			  slidesToShow: 1
		  }
	  }, {
		  breakpoint: 480,
		  settings: {
			  slidesToShow: 1
		  }
	  }]
  });
});
// Fixed Header
$(window).scroll(function() {
    if ($(this).scrollTop() > 80){
        $('header').addClass("sticky");
		 $('body').addClass("stick_body");
		
    }
    else{
        $('header').removeClass("sticky");
		$('body').removeClass("stick_body");
    }
});
// Carousel Banner
(function( $ ) {

    //Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#mainbanner'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
    $('#mainbanner').carousel({
        interval:3000,
        pause: "false"
    });
	
})(jQuery);	
