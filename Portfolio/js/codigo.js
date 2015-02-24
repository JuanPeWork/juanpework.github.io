jQuery.fn.rotate = function(value) {
    
    $(this).animate({deg: value}, {
        step: function(now, fx){
            $(this).css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
    return $(this);
};


$(document).ready(function(){

	//mostrar/ocultar ul al hacer click en #menu

	var rotation = false;
	$("#menu").click(function(){

		if(!rotation){
			$(this).rotate(90);
			rotation = true;
			$('nav ul').slideDown("1000");
		}
		else{
			$(this).rotate(0);
			rotation = false;
			$('nav ul').slideUp("1000");
		}


	});

	//mostrar/ocultar ul dependiendo del tamaño de pantalla

	$(window).resize(function() {
		if($(window).innerWidth() <= 645) {
	    		$('nav ul').css("display", "none");
		}
		else{
	    	$('nav ul').css("display", "inline");
		}
	});

	$(window).scroll(function() {
		if($(this).innerWidth() > 645) {
	    	posicionarMenu();
		}
		else{
			$('nav').removeClass('fixed');
		}
	});

	//Pegar nav al borde superior de la pantalla al pasar header

	function posicionarMenu() {

	    var altheader = $('header').innerHeight(true);
	    var altmenu = $('nav').innerHeight(true);

	    altheader = altheader - altmenu;

	    if($(window).scrollTop() >= altheader){
	        $('nav').addClass('fixed');

	    } else{
	        $('nav').removeClass('fixed');
	    }
	}

	//Cola de colores y creacion de tabs

		$("header h1, header h2").click(function(){

			$(this).animate({
				"color": "#FFAD04"
			}, 500, "linear");
			$(this).delay(1000)
			$(this).animate({
				"color": "#00A9FF"
			}, 500, "linear");

		});
		

		$("#logo").click(function(){
			$("header h1, header h2").stop(true);
		});

});