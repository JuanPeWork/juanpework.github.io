jQuery.fn.scrollLoad = function(opciones){
	var conf = {
		velocity: 1500,
		load: 500,
		addPx: 70
	};

	jQuery.extend(conf, opciones);


	var header = $('header').outerHeight(true);
	header -= conf.addPx;

	$(this).delay(conf.load);
	$(this).animate({
		scrollTop: header
	}, conf.velocity);
	
	return $(this);
};

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

	var url = document.location.href;

	if(url.search("about") != -1){

		$("body,html").scrollLoad({
			velocity: 2000,
			load: 1000,
			addPx: 80
		});
	}
	else if(url.search("contacto") != -1){

		$("body,html").scrollLoad();

		$.datepicker.regional['es'] = {
			closeText: 'Cerrar',
			prevText: '<Ant',
			nextText: 'Sig>',
			currentText: 'Hoy',
			monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
			dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
			dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
			dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
			weekHeader: 'Sm',
			dateFormat: 'dd/mm/yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
		};

		$.datepicker.setDefaults($.datepicker.regional['es']);


		//DatePicker

		$("#fechaInicio").datepicker({
			minDate: new Date(),
			maxDate: "+4d"
		});

		$("#fechaFin").datepicker({
			minDate: "+4d",
			maxDate: "+2w"
		});
	}

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
		if($("html, body").innerWidth() <= 645) {
			$('nav ul').css("display", "none");
		}
		else{
			$('nav ul').css("display", "inline");
		}
	});

	$(window).scroll(function() {
		if($("html, body").innerWidth() > 645) {
			posicionarMenu();
		}
		else{
			$('nav').removeClass('fixed');
		}
	});

	//Pegar nav al borde superior de la pantalla al pasar header

	function posicionarMenu() {

		var altheader = $('header').outerHeight(true);
		var altmenu = $('nav').outerHeight(true);

		altheader = altheader - altmenu;

		if($(window).scrollTop() >= altheader){
			$('nav').addClass('fixed');
		}
		else{
			$('nav').removeClass('fixed');
		}
	}

	//Cola de colores y creacion de tabs

		$("header h1").click(function(){

			$(this).animate({
				"color": "#FFAD04"
			}, 500, "linear");
			$(this).delay(1000);
			$(this).animate({
				"color": "#00A9FF"
			}, 500, "linear");
			$(this).delay(1000);
			$(this).animate({
				"color": "#FFAD04"
			}, 500, "linear");
		});


		$("#logo").click(function(){
			$("header h1").stop(true);
		});

});