
var age =0;
var height =0;
var weight=0;
var color=0;
var sweat=0;
var evaporation=0;
var mass;
var humidity;

function expandit(idname) {
    var $divs = $("#"+idname);
    if ($divs.is(":hidden"))
    {
        $divs.slideDown("slow");
        if(idname == "dropdown")
            $("#container").css("margin-top", 225);
        $divs.find("input:first-of-type").focus();
    }
    else
    {
        if(idname == "dropdown")
            $("#container").css("margin-top", 110);
        $divs.slideUp("fast");
    }
}

function closeit(idname) {
    var $divs = $("#"+idname);
    if (!$divs.is(":hidden"))
    {
        if(idname == "dropdown")
            $("#container").css("margin-top", 110);
        $divs.slideUp("fast");
    }
}

function onClick(){
	sweatlevel=0;
	sweat=1;
	age =0;
    height =0;
    weight=0;
    color=0;


	var e = document.getElementById("heightft");
	var feet = e.options[e.selectedIndex].value;
	height+=feet*12;
	e = document.getElementById("heightin");
    var inc = e.options[e.selectedIndex].value;
	height+=parseInt(inc)*2.54;

	e = document.getElementById("weight");
	weight = e.options[e.selectedIndex].value;

	e = document.getElementById("sweat");
	sweatlevel = e.options[e.selectedIndex].value;
	
	e = document.getElementById("age");
	age = e.options[e.selectedIndex].value;


	e = document.getElementById("age");
	var sweatbase = e.options[e.selectedIndex].value;

	var factor = 1;



	switch(parseInt(sweatlevel)){
		case 1: sweat*=13.333333333;break;
		case 2: sweat*=15;break;
		case 3: sweat*=16.6666666666;break;
		case 4: sweat*=18.3333333333;break;
		case 5: sweat*=20;break;
		case 6: sweat*=21.666666666;break;
		case 7: sweat*=23.333333333;break;
	}
	alert(sweat);

	switch(parseInt(sweatlevel)){
		case 1: sweat*=0.8;break;
		case 2: sweat*=0.9;break;
		case 3: sweat*=1;break;
		case 4: sweat*=1.1;break;
		case 5: sweat*=1.2;break;
		case 6: sweat*=1.3;break;
		case 7: sweat*=1.4;break;
	}
	
	switch(parseInt(age)){
		case 1: sweat*=1.15;break;
		case 2: sweat*=1.1;break;
		case 3: sweat*=1.05;break;
		case 4: sweat*=1;break;
		case 5: sweat*=0.95;break;
		case 6: sweat*=0.9;break;
		case 7: sweat*=0.85;break;
	}	

	if(height<=150)
		sweat*=0.85;
	else if(height<=168)
		sweat*=0.9;
	else if(height<=177)
		sweat*=0.95;
	else if(height<=186)
		sweat*=1.0;
	else if(height<=195)
		sweat*=1.05;
	else if(height<=204)
		sweat*=1.1;
	else
		sweat*=1.15;
	sweat+=1;
	sweat*=0.3;  //subject to change
	alert(sweat);

	mass = (20*weight+90)*453.592;
	2270*mass/2.42672;


    if (typeof jQuery == 'undefined') {        
            alert("Jquery doesnt exist????????");
        }
    jQuery.get( "http://api.wunderground.com/api/3325cf013e10768f/conditions/q/CA/San_Francisco.json", function( response ) { 
        var s = document.getElementById("water");
        var respiration = 1;
        s.innerHTML = response.current_observation.observation_location.latitude;        
    });  

}

$("#age").hide();
$("#heightin").hide();
$("#heightout").hide();
