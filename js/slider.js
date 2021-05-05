$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true
				}
			},
			{
				breakpoint: 1124,
				settings: {
					slidesToShow: 2,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true
				}
			},
			{
				breakpoint: 580,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					centerMode: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1,
					dots: true,
					variableWidth: true,
					centerMode: true

				}
			}
		]

	});


});