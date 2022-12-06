$('.team-carousel').slick({
	mobileFirst: true,
	autoplay: true,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 760,
			settings: { slidesToShow: 2, slidesToScroll: 2 },
		},
		{
			breakpoint: 992,
			settings: { slidesToShow: 3, slidesToScroll: 3 },
		},
	],
});
