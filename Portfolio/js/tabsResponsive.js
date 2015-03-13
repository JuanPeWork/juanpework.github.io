$(document).ready(function(){

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
};
 
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

};
});