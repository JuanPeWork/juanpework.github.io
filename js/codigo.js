$(document).ready(function(){
	//mostrar/ocultar ul al hacer click en #menu

	var visible = false;
	$("#menu").click(function(){

		if(!visible){
			visible = true;
			$('nav ul').slideDown("1000");
		}
		else{
			visible = false;
			$('nav ul').slideUp("1000");
		}


	});

	//mostrar/ocultar ul dependiendo del tamaño de pantalla

	$(window).resize(function() {
		if(window.innerWidth <= 645) {
			$('nav ul').css("display", "none");
		}
		else{
			$('nav ul').css("display", "inline");
		}
	});

	$("#project").click(function(){
		$('html, body').animate({
        scrollTop: $("#competencias").offset().top
    }, 1000);
	});

});