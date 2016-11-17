(function($){
	$.fn.impact = function(imgURL,callback){
		var _sale = this;
		var isImpact = true;
		this.timer = setInterval(function(){
			$('img[src="'+imgURL+'"]').each(function(index,element){
				if($(element).width() + $(element).offset().left > $(_sale).offset().left && $(element).offset().left < $(_sale).offset().left + $(_sale).width()){
					if($(element).height() + $(element).offset().top > $(_sale).offset().top && $(element).offset().top < $(_sale).offset().top + $(_sale).height() && isImpact){
						isImpact = false;
						callback(_sale,element);
					}
				}
			});
		},30);
		return this;
	}
})(jQuery);