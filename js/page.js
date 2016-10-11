(function ($) {

	var table = $('#data-table');

	var resizeTable = function() {
		table.height(
			$(window).height() -
			table.offset().top -
			60
		);
	};

	var initDataTable = function() {
		resizeTable();

		$(window).resize(function() {
			resizeTable();
		});

		table.niceScroll();
	};

	$(function() {
		initDataTable();
	});

}) (jQuery);