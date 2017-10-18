$ (function () {
	'use strict';

	$('html').niceScroll();
	$('.header').height($(window).height());


	$('.header .arrow i').click(function () {

		$('html, body').animate({
			scrollTop: $('.feature')
			.offset().top }, 1000);
	});

	$('.hire').click(function () {

		$('html, body').animate({
			scrollTop: $('.team')
			.offset().top }, 1000);
	});

	$('.works').click(function () {

		$('html, body').animate({
			scrollTop: $('.our-work')
			.offset().top }, 1000);
	});

	var leftArrow = $('.Testimonials  .fa-chevron-left'),
		rightArrow = $('.Testimonials .fa-chevron-right');

	function checkClients() {
		if ($('.client:first').hasClass('active')){
			leftArrow.fadeOut();
		}else{
			leftArrow.fadeIn();
		}
		if ($('.client:last').hasClass('active')){
			rightArrow.fadeOut();
		}else {
			rightArrow.fadeIn();
		}
	}
	checkClients();

	$('.Testimonials i').click(function (){
		if ($(this).hasClass('fa-chevron-right')){

			$('.Testimonials .active').fadeOut(100, function(){
				$(this).removeClass('active').next('.client').addClass('active').fadeIn();
				checkClients();
			});

		}else{

			$('.Testimonials .active').fadeOut(100, function(){
				$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
				checkClients();
			});
		}
	});
});