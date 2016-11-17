(function($) {
	$.fn.objectMove = function() {
		var _sale = this;
		$(this).parent().on('mousemove', function(e) {
			var maxWidth = $(this).width() - _sale.width();
			var maxHeight = $(this).height() - _sale.height();
			var x = e.clientX - $(this).offset().left - _sale.width() / 2;
			var y = e.clientY - $(this).offset().top - _sale.height() / 2;
			if(x <= 0 ){
				x = 0;
			}
			if(x >= maxWidth){
				x = maxWidth;
			}
			if(y <= 0){
				y = 0;
			}
			if(y >= maxHeight){
				y = maxHeight;
			}
			_sale.css({
				"left": x + "px",
				"top":y + "px"
			});
		});
		return this;
	}
})(jQuery);