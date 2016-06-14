$( document ).ready(function(){
	var isAnySelected = false;
	$('#physHidedDiv').slideUp();
	$('#mathHidedDiv').slideUp();
	$('#chemHidedDiv').slideUp();

	$('#mathDiv').click(function(){
        $('#math').css("background-color", "#8948E9");
        $('#phys').css("background-color", "#7938D9");
        $('#chem').css("background-color", "#7938D9");
        if(isAnySelected)
        	$('#mathHidedDiv').delay(400).slideDown();
        else
        	$('#mathHidedDiv').slideDown();
		$('#physHidedDiv').slideUp();
		$('#chemHidedDiv').slideUp();
        $('#chemHidedDiv:first-child').animate({ "opacity": "0"});
        $('#mathHidedDiv:first-child').animate({ "opacity": "1"});
        $('#physHidedDiv:first-child').animate({ "opacity": "0"});
        isAnySelected = true;
	});
	$('#physDiv').click(function(){
        $('#phys').css("background-color", "#8948E9");
        $('#math').css("background-color", "#7938D9");
        $('#chem').css("background-color", "#7938D9");
        if(isAnySelected)
        	$('#physHidedDiv').delay(400).slideDown();
        else
        	$('#physHidedDiv').slideDown();
		$('#mathHidedDiv').slideUp();
		$('#chemHidedDiv').slideUp();
        $('#chemHidedDiv:first-child').animate({ "opacity": "0"});
        $('#mathHidedDiv:first-child').animate({ "opacity": "0"});
        $('#physHidedDiv:first-child').delay(400).animate({ "opacity": "1"});
        isAnySelected = true;
	});
	$('#chemDiv').click(function(){
        $('#chem').css("background-color", "#8948E9");
        $('#phys').css("background-color", "#7938D9");
        $('#math').css("background-color", "#7938D9");
        if(isAnySelected)
        	$('#chemHidedDiv').delay(400).slideDown();
        else
        	$('#chemHidedDiv').slideDown();
		$('#mathHidedDiv').slideUp();
		$('#physHidedDiv').slideUp();
        $('#chemHidedDiv:first-child').animate({ "opacity": "1"});
        $('#mathHidedDiv:first-child').animate({ "opacity": "0"});
        $('#physHidedDiv:first-child').animate({ "opacity": "0"});
        isAnySelected = true;
	});
});