$( document ).ready(function(){
	$('#mathDiv').click(function(){
        $('#mathDiv').css("background-color", "#8948E9");
        $('#physDiv').css("background-color", "#7938D9");
        $('#chemDiv').css("background-color", "#7938D9");
	});
	$('#physDiv').click(function(){
        $('#physDiv').css("background-color", "#8948E9");
        $('#mathDiv').css("background-color", "#7938D9");
        $('#chemDiv').css("background-color", "#7938D9");
	});
	$('#chemDiv').click(function(){
        $('#chemDiv').css("background-color", "#8948E9");
        $('#physDiv').css("background-color", "#7938D9");
        $('#mathDiv').css("background-color", "#7938D9");
	});
});