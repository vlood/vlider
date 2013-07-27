$.fn.extend({
	'slide': function(){
		$('ul').css({'list-style': 'none'});
		this.find('ul li img').css({ 'display': 'none', 'width': '300px', 'height': 'auto'});
		var slides = this.find('ul li img');
		var index = 0;
		$(slides[index]).fadeIn(1500);
		setInterval(function(){
			$(slides[index]).slideUp(1500);
			
			if(index == slides.length - 1){
				index = 0;
			} else {
				index++;
			}
			
			//if(index%2){
				//$(slides[index]).slideUp(1500);
			//} else {
				$(slides[index]).slideDown(1500);
			//}
			
		}, 1200);
	}
});
