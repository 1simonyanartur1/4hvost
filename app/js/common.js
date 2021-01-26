(function ($) {

	
	$(function () {
		$('.lazy').Lazy();
	  });

	$(document).ready(function () {

		var $scrollPos = 0;
		var $st = $(this).scrollTop();
		$(window).scroll(function () {
			var $st = $(this).scrollTop();
			if ($st > $scrollPos) {
				// Down
				$('.header-top').addClass('scroll');
			}
			if ($st == 0) {
				// Up
				$('.header-top').removeClass('scroll');
			}
			$scrollPos = $st;
		});
		

		// SmartMenus init
		$(function () {
			$('#main-menu').smartmenus({
				mainMenuSubOffsetX: -1,
				mainMenuSubOffsetY: 4,
				subMenusSubOffsetX: 6,
				subMenusSubOffsetY: -6,
				markCurrentItem: true,
				markCurrentTree: true,
				collapsibleBehavior: 'link'
			});
		});

		$('.mainblock .slider').slick({
			arrows: true,
			dots: false,
			prevArrow: '<button class="arrow arrow_prev"><svg viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.000789642 23.6001C0.20079 18.3001 1.60079 13.7001 5.10079 9.70008C8.80079 5.70008 13.7008 2.90008 18.8008 1.30008C21.3008 0.500082 23.9008 8.16211e-05 26.5008 0.100082C27.6008 0.100082 28.8008 0.200082 29.9008 0.500082C31.0008 0.800082 32.1008 1.50008 33.1008 2.20008C33.6008 2.50008 33.4008 6.10008 32.9008 6.00008C31.1008 5.70008 29.3008 5.70008 27.5008 5.70008C25.4008 5.70008 23.3008 6.00008 21.3008 6.40008C17.0008 7.30008 12.9008 9.20008 9.30079 11.7001C6.10079 14.0001 3.00079 17.1001 1.70079 20.9001C1.10079 22.6001 1.10079 24.3001 1.30079 26.2001C1.60079 28.6001 2.30079 31.0001 3.40079 33.1001C5.50079 37.5001 9.10079 41.2001 13.4008 43.4001C17.0008 45.2001 21.2008 45.8001 25.2008 45.8001C33.2008 45.8001 42.3008 43.3001 46.8008 36.2001C49.8008 31.5001 48.9008 26.1001 46.8008 21.3001C44.4008 15.6001 40.1008 10.4001 34.8008 7.10008C34.2008 6.70008 34.8008 4.40008 34.9008 4.40008C45.4008 10.5001 51.5008 22.6001 49.4008 34.6001C48.5008 39.4001 46.2008 43.4001 42.2008 46.3001C38.5008 49.0001 34.0008 50.5001 29.4008 51.1001C25.1008 51.7001 20.5008 51.6001 16.4008 50.4001C11.4008 48.9001 7.00079 45.4001 4.20079 41.0001C1.00079 35.7001 -0.199211 29.6001 0.000789642 23.6001Z"/><path d="M23.2004 26.9002C25.1004 29.4002 26.8004 32.1002 27.7004 35.1002C27.9004 35.7002 27.9004 36.3002 27.8004 36.9002C27.8004 37.0002 27.7004 38.0002 27.4004 37.7002C26.5004 36.8002 25.9004 35.7002 25.2004 34.7002C24.4004 33.5002 23.6004 32.4002 22.7004 31.2002C21.8004 30.0002 20.9004 28.9002 20.0004 27.8002C19.1004 26.7002 18.0004 25.5002 17.2004 24.3002C16.8004 23.7002 16.9004 22.6002 16.9004 21.9002C16.9004 21.4002 16.9004 20.3002 17.4004 20.0002C20.0004 18.7002 21.9004 16.5002 24.3004 15.0002C25.2004 14.4002 26.4004 13.5002 27.6004 13.6002C28.4004 13.7002 29.1004 14.5002 28.7004 15.4002C28.2004 16.3002 27.2004 16.7002 26.3004 17.1002C25.2004 17.7002 24.1004 18.4002 23.2004 19.2002C22.0004 20.2002 20.8004 21.3002 19.6004 22.3002C19.9004 22.7002 20.2004 23.0002 20.4004 23.3002C21.3004 24.6002 22.3004 25.7002 23.2004 26.9002Z"/></svg></button>',
			nextArrow: '<button class="arrow arrow_next"><svg viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.8 23.6001C49.6 18.3001 48.2 13.7001 44.7 9.70008C41 5.70008 36.1 2.90008 31 1.30008C28.5 0.500082 25.9 8.16211e-05 23.3 0.100082C22.2 0.100082 21 0.200082 19.9 0.500082C18.8 0.800082 17.7 1.50008 16.7 2.20008C16.2 2.50008 16.4 6.10008 16.9 6.00008C18.7 5.70008 20.5 5.70008 22.3 5.70008C24.4 5.70008 26.5 6.00008 28.5 6.40008C32.8 7.30008 36.9 9.20008 40.5 11.7001C43.7 14.0001 46.8 17.1001 48.1 20.9001C48.7 22.6001 48.7 24.3001 48.5 26.2001C48.2 28.6001 47.5 31.0001 46.4 33.1001C44.3 37.5001 40.7 41.2001 36.4 43.4001C32.8 45.2001 28.6 45.8001 24.6 45.8001C16.6 45.8001 7.49999 43.3001 2.99999 36.2001C-9.05991e-06 31.5001 0.899991 26.1001 2.99999 21.3001C5.39999 15.6001 9.69999 10.4001 15 7.10008C15.6 6.70008 15 4.40008 14.9 4.40008C4.39999 10.5001 -1.70001 22.6001 0.399991 34.6001C1.29999 39.4001 3.59999 43.4001 7.59999 46.3001C11.3 49.0001 15.8 50.5001 20.4 51.1001C24.7 51.7001 29.3 51.6001 33.4 50.4001C38.4 48.9001 42.8 45.4001 45.6 41.0001C48.8 35.7001 50 29.6001 49.8 23.6001Z"/><path d="M26.6004 26.9002C24.7004 29.4002 23.0004 32.1002 22.1004 35.1002C21.9004 35.7002 21.9004 36.3002 22.0004 36.9002C22.0004 37.0002 22.1004 38.0002 22.4004 37.7002C23.3004 36.8002 23.9004 35.7002 24.6004 34.7002C25.4004 33.5002 26.2004 32.4002 27.1004 31.2002C28.0004 30.0002 28.9004 28.9002 29.8004 27.8002C30.7004 26.7002 31.8004 25.5002 32.6004 24.3002C33.0004 23.7002 32.9004 22.6002 32.9004 21.9002C32.9004 21.4002 32.9004 20.3002 32.4004 20.0002C29.8004 18.7002 27.9004 16.5002 25.5004 15.0002C24.6004 14.4002 23.4004 13.5002 22.2004 13.6002C21.4004 13.7002 20.7004 14.5002 21.1004 15.4002C21.6004 16.3002 22.6004 16.7002 23.5004 17.1002C24.6004 17.7002 25.7004 18.4002 26.6004 19.2002C27.8004 20.2002 29.0004 21.3002 30.2004 22.3002C29.9004 22.7002 29.6004 23.0002 29.4004 23.3002C28.5004 24.6002 27.5004 25.7002 26.6004 26.9002Z"/></svg></button>',
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true
		});

		$(document).on('click', '.product .choose', function() {
			$(this).toggleClass('active');
		});

		$('.products-slider .slider').slick({
			arrows: true,
			dots: false,
			prevArrow: '<button class="arrow arrow_prev"><svg viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.000789642 23.6001C0.20079 18.3001 1.60079 13.7001 5.10079 9.70008C8.80079 5.70008 13.7008 2.90008 18.8008 1.30008C21.3008 0.500082 23.9008 8.16211e-05 26.5008 0.100082C27.6008 0.100082 28.8008 0.200082 29.9008 0.500082C31.0008 0.800082 32.1008 1.50008 33.1008 2.20008C33.6008 2.50008 33.4008 6.10008 32.9008 6.00008C31.1008 5.70008 29.3008 5.70008 27.5008 5.70008C25.4008 5.70008 23.3008 6.00008 21.3008 6.40008C17.0008 7.30008 12.9008 9.20008 9.30079 11.7001C6.10079 14.0001 3.00079 17.1001 1.70079 20.9001C1.10079 22.6001 1.10079 24.3001 1.30079 26.2001C1.60079 28.6001 2.30079 31.0001 3.40079 33.1001C5.50079 37.5001 9.10079 41.2001 13.4008 43.4001C17.0008 45.2001 21.2008 45.8001 25.2008 45.8001C33.2008 45.8001 42.3008 43.3001 46.8008 36.2001C49.8008 31.5001 48.9008 26.1001 46.8008 21.3001C44.4008 15.6001 40.1008 10.4001 34.8008 7.10008C34.2008 6.70008 34.8008 4.40008 34.9008 4.40008C45.4008 10.5001 51.5008 22.6001 49.4008 34.6001C48.5008 39.4001 46.2008 43.4001 42.2008 46.3001C38.5008 49.0001 34.0008 50.5001 29.4008 51.1001C25.1008 51.7001 20.5008 51.6001 16.4008 50.4001C11.4008 48.9001 7.00079 45.4001 4.20079 41.0001C1.00079 35.7001 -0.199211 29.6001 0.000789642 23.6001Z"/><path d="M23.2004 26.9002C25.1004 29.4002 26.8004 32.1002 27.7004 35.1002C27.9004 35.7002 27.9004 36.3002 27.8004 36.9002C27.8004 37.0002 27.7004 38.0002 27.4004 37.7002C26.5004 36.8002 25.9004 35.7002 25.2004 34.7002C24.4004 33.5002 23.6004 32.4002 22.7004 31.2002C21.8004 30.0002 20.9004 28.9002 20.0004 27.8002C19.1004 26.7002 18.0004 25.5002 17.2004 24.3002C16.8004 23.7002 16.9004 22.6002 16.9004 21.9002C16.9004 21.4002 16.9004 20.3002 17.4004 20.0002C20.0004 18.7002 21.9004 16.5002 24.3004 15.0002C25.2004 14.4002 26.4004 13.5002 27.6004 13.6002C28.4004 13.7002 29.1004 14.5002 28.7004 15.4002C28.2004 16.3002 27.2004 16.7002 26.3004 17.1002C25.2004 17.7002 24.1004 18.4002 23.2004 19.2002C22.0004 20.2002 20.8004 21.3002 19.6004 22.3002C19.9004 22.7002 20.2004 23.0002 20.4004 23.3002C21.3004 24.6002 22.3004 25.7002 23.2004 26.9002Z"/></svg></button>',
			nextArrow: '<button class="arrow arrow_next"><svg viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.8 23.6001C49.6 18.3001 48.2 13.7001 44.7 9.70008C41 5.70008 36.1 2.90008 31 1.30008C28.5 0.500082 25.9 8.16211e-05 23.3 0.100082C22.2 0.100082 21 0.200082 19.9 0.500082C18.8 0.800082 17.7 1.50008 16.7 2.20008C16.2 2.50008 16.4 6.10008 16.9 6.00008C18.7 5.70008 20.5 5.70008 22.3 5.70008C24.4 5.70008 26.5 6.00008 28.5 6.40008C32.8 7.30008 36.9 9.20008 40.5 11.7001C43.7 14.0001 46.8 17.1001 48.1 20.9001C48.7 22.6001 48.7 24.3001 48.5 26.2001C48.2 28.6001 47.5 31.0001 46.4 33.1001C44.3 37.5001 40.7 41.2001 36.4 43.4001C32.8 45.2001 28.6 45.8001 24.6 45.8001C16.6 45.8001 7.49999 43.3001 2.99999 36.2001C-9.05991e-06 31.5001 0.899991 26.1001 2.99999 21.3001C5.39999 15.6001 9.69999 10.4001 15 7.10008C15.6 6.70008 15 4.40008 14.9 4.40008C4.39999 10.5001 -1.70001 22.6001 0.399991 34.6001C1.29999 39.4001 3.59999 43.4001 7.59999 46.3001C11.3 49.0001 15.8 50.5001 20.4 51.1001C24.7 51.7001 29.3 51.6001 33.4 50.4001C38.4 48.9001 42.8 45.4001 45.6 41.0001C48.8 35.7001 50 29.6001 49.8 23.6001Z"/><path d="M26.6004 26.9002C24.7004 29.4002 23.0004 32.1002 22.1004 35.1002C21.9004 35.7002 21.9004 36.3002 22.0004 36.9002C22.0004 37.0002 22.1004 38.0002 22.4004 37.7002C23.3004 36.8002 23.9004 35.7002 24.6004 34.7002C25.4004 33.5002 26.2004 32.4002 27.1004 31.2002C28.0004 30.0002 28.9004 28.9002 29.8004 27.8002C30.7004 26.7002 31.8004 25.5002 32.6004 24.3002C33.0004 23.7002 32.9004 22.6002 32.9004 21.9002C32.9004 21.4002 32.9004 20.3002 32.4004 20.0002C29.8004 18.7002 27.9004 16.5002 25.5004 15.0002C24.6004 14.4002 23.4004 13.5002 22.2004 13.6002C21.4004 13.7002 20.7004 14.5002 21.1004 15.4002C21.6004 16.3002 22.6004 16.7002 23.5004 17.1002C24.6004 17.7002 25.7004 18.4002 26.6004 19.2002C27.8004 20.2002 29.0004 21.3002 30.2004 22.3002C29.9004 22.7002 29.6004 23.0002 29.4004 23.3002C28.5004 24.6002 27.5004 25.7002 26.6004 26.9002Z"/></svg></button>',
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: true,
			responsive: [
				{
					breakpoint: 1800,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		$('.partners .slider').slick({
			arrows: true,
			dots: false,
			prevArrow: '<button class="arrow arrow_prev"><svg viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.000789642 23.6001C0.20079 18.3001 1.60079 13.7001 5.10079 9.70008C8.80079 5.70008 13.7008 2.90008 18.8008 1.30008C21.3008 0.500082 23.9008 8.16211e-05 26.5008 0.100082C27.6008 0.100082 28.8008 0.200082 29.9008 0.500082C31.0008 0.800082 32.1008 1.50008 33.1008 2.20008C33.6008 2.50008 33.4008 6.10008 32.9008 6.00008C31.1008 5.70008 29.3008 5.70008 27.5008 5.70008C25.4008 5.70008 23.3008 6.00008 21.3008 6.40008C17.0008 7.30008 12.9008 9.20008 9.30079 11.7001C6.10079 14.0001 3.00079 17.1001 1.70079 20.9001C1.10079 22.6001 1.10079 24.3001 1.30079 26.2001C1.60079 28.6001 2.30079 31.0001 3.40079 33.1001C5.50079 37.5001 9.10079 41.2001 13.4008 43.4001C17.0008 45.2001 21.2008 45.8001 25.2008 45.8001C33.2008 45.8001 42.3008 43.3001 46.8008 36.2001C49.8008 31.5001 48.9008 26.1001 46.8008 21.3001C44.4008 15.6001 40.1008 10.4001 34.8008 7.10008C34.2008 6.70008 34.8008 4.40008 34.9008 4.40008C45.4008 10.5001 51.5008 22.6001 49.4008 34.6001C48.5008 39.4001 46.2008 43.4001 42.2008 46.3001C38.5008 49.0001 34.0008 50.5001 29.4008 51.1001C25.1008 51.7001 20.5008 51.6001 16.4008 50.4001C11.4008 48.9001 7.00079 45.4001 4.20079 41.0001C1.00079 35.7001 -0.199211 29.6001 0.000789642 23.6001Z"/><path d="M23.2004 26.9002C25.1004 29.4002 26.8004 32.1002 27.7004 35.1002C27.9004 35.7002 27.9004 36.3002 27.8004 36.9002C27.8004 37.0002 27.7004 38.0002 27.4004 37.7002C26.5004 36.8002 25.9004 35.7002 25.2004 34.7002C24.4004 33.5002 23.6004 32.4002 22.7004 31.2002C21.8004 30.0002 20.9004 28.9002 20.0004 27.8002C19.1004 26.7002 18.0004 25.5002 17.2004 24.3002C16.8004 23.7002 16.9004 22.6002 16.9004 21.9002C16.9004 21.4002 16.9004 20.3002 17.4004 20.0002C20.0004 18.7002 21.9004 16.5002 24.3004 15.0002C25.2004 14.4002 26.4004 13.5002 27.6004 13.6002C28.4004 13.7002 29.1004 14.5002 28.7004 15.4002C28.2004 16.3002 27.2004 16.7002 26.3004 17.1002C25.2004 17.7002 24.1004 18.4002 23.2004 19.2002C22.0004 20.2002 20.8004 21.3002 19.6004 22.3002C19.9004 22.7002 20.2004 23.0002 20.4004 23.3002C21.3004 24.6002 22.3004 25.7002 23.2004 26.9002Z"/></svg></button>',
			nextArrow: '<button class="arrow arrow_next"><svg viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.8 23.6001C49.6 18.3001 48.2 13.7001 44.7 9.70008C41 5.70008 36.1 2.90008 31 1.30008C28.5 0.500082 25.9 8.16211e-05 23.3 0.100082C22.2 0.100082 21 0.200082 19.9 0.500082C18.8 0.800082 17.7 1.50008 16.7 2.20008C16.2 2.50008 16.4 6.10008 16.9 6.00008C18.7 5.70008 20.5 5.70008 22.3 5.70008C24.4 5.70008 26.5 6.00008 28.5 6.40008C32.8 7.30008 36.9 9.20008 40.5 11.7001C43.7 14.0001 46.8 17.1001 48.1 20.9001C48.7 22.6001 48.7 24.3001 48.5 26.2001C48.2 28.6001 47.5 31.0001 46.4 33.1001C44.3 37.5001 40.7 41.2001 36.4 43.4001C32.8 45.2001 28.6 45.8001 24.6 45.8001C16.6 45.8001 7.49999 43.3001 2.99999 36.2001C-9.05991e-06 31.5001 0.899991 26.1001 2.99999 21.3001C5.39999 15.6001 9.69999 10.4001 15 7.10008C15.6 6.70008 15 4.40008 14.9 4.40008C4.39999 10.5001 -1.70001 22.6001 0.399991 34.6001C1.29999 39.4001 3.59999 43.4001 7.59999 46.3001C11.3 49.0001 15.8 50.5001 20.4 51.1001C24.7 51.7001 29.3 51.6001 33.4 50.4001C38.4 48.9001 42.8 45.4001 45.6 41.0001C48.8 35.7001 50 29.6001 49.8 23.6001Z"/><path d="M26.6004 26.9002C24.7004 29.4002 23.0004 32.1002 22.1004 35.1002C21.9004 35.7002 21.9004 36.3002 22.0004 36.9002C22.0004 37.0002 22.1004 38.0002 22.4004 37.7002C23.3004 36.8002 23.9004 35.7002 24.6004 34.7002C25.4004 33.5002 26.2004 32.4002 27.1004 31.2002C28.0004 30.0002 28.9004 28.9002 29.8004 27.8002C30.7004 26.7002 31.8004 25.5002 32.6004 24.3002C33.0004 23.7002 32.9004 22.6002 32.9004 21.9002C32.9004 21.4002 32.9004 20.3002 32.4004 20.0002C29.8004 18.7002 27.9004 16.5002 25.5004 15.0002C24.6004 14.4002 23.4004 13.5002 22.2004 13.6002C21.4004 13.7002 20.7004 14.5002 21.1004 15.4002C21.6004 16.3002 22.6004 16.7002 23.5004 17.1002C24.6004 17.7002 25.7004 18.4002 26.6004 19.2002C27.8004 20.2002 29.0004 21.3002 30.2004 22.3002C29.9004 22.7002 29.6004 23.0002 29.4004 23.3002C28.5004 24.6002 27.5004 25.7002 26.6004 26.9002Z"/></svg></button>',
			slidesToShow: 6,
			slidesToScroll: 1,
			infinite: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 3
					}
				}
			]
		});

	});
})(jQuery);