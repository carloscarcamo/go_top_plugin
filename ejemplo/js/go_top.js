jQuery.fn.go_top = function(params){
	var defaults = {
		//pocicion en la que se debe mostrar el retorno arriba
		"top":200,	
		//tiempo en que tarda en aparecer el boton
		"in":200,
		//tiempo que tarda en desaparecer el boton
		"out":200,
		//velocidad con la que regresa al inicio de la pagina
		"duration":400,		
	};
	
	var options = jQuery.extend(defaults, params);
	var go_top = $(this);

	
	
	go_top.css({
		"position":"fixed",
		"bottom":"1em",
		"right":"1em",		
		"width":"50px",
		"height":"50px",
		"text-decoration":"none",
		"color":"#FFF",
		"background":"url('imgs/up1.png') no-repeat",
		"background-size":"contain",
		"display":"none"
	});
	
	go_top.hover(function(){
		$(this).css({
			"background":"url('imgs/up2.png') no-repeat",
			"background-size":"contain"
		});		
	},function(){
		$(this).css({
			"background":"url('imgs/up1.png') no-repeat",
			"background-size":"contain"
		});
	});
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > options.top) {
			go_top.fadeIn(options.in);
		} else {
			go_top.fadeOut(options.out);
		}
	});
			
	// Animar el scroll hacia arriba
	return go_top.click(function(event) {
		event.preventDefault();				
		$('html, body').animate({scrollTop: 0}, options.duration);
	});
};
