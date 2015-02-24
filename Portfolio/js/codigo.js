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


	//Tabs responsive
	$(window).resize(function(e){
		updateUI();
	});
	
	updateUI();


// event handler for window resize
function updateUI(){
 
	if($(window).innerWidth() <= 938){
 
		// mobile view instructions
		tabsToAccordions();
 
	} else {
 
		// desktop view instructions
		accordionsToTabs();
	}
 
}
 
// changes tabs to accordions (jquery ui)
function tabsToAccordions(){
	$('#tabs').each(function(){
		var a = $('<div class="accordion">');
		var b = new Array();
		$(this).find('>ul>li').each(function(){
			b.push('<h3>'+$(this).html()+'</h3>');
		});
		var c = new Array();
		$(this).find('>div').each(function(){
			c.push('<div>'+$(this).html()+'</div>');
		});
		for(var i = 0; i < b.length; i++){
			a.append(b[i]).append(c[i]);
		}
		$(this).before(a);
		$(this).remove();
	})
	$('.accordion').accordion({active: false, event: "click",collapsible:true, heightStyle: "auto", animate: 350});
	$('.accordion').css("margin", "100px auto");
	$('.accordion').css("width", "95%");
;}
 
// changes accordions to tabs (jquery ui)
function accordionsToTabs(){
	$('.accordion').each(function(){
		var a = $('<div id="tabs">');
		var count = 0;
		var b = $('<ul>');
		$(this).find('>h3').each(function(){
			count++;
			b.append('<li><a href="#tabs-'+count+'">'+$(this).text()+'</a></li>');
		});
		var count = 0;
		var c = $('');
		$(this).find('>div').each(function(){
			count++;
			c=c.add('<div id="tabs-'+count+'">'+$(this).html()+'</div>');
		});
		a.append(b).append(c);
		$(this).before(a);
		$(this).remove();
	});
	$('#tabs').tabs({event: "mouseover click",heightStyle: "auto",show:{effect:"fade",duration: 600}});
	$('#tabs').css("margin-top", "100px");
;
}

});