let answer = ["яблоко","груша","город","школа","сайт", "браузер", 
"плагин", "цвет", "стиль", "язик", "узор", "сорока"];

let was = [];

let progress = 0;

let num = Math.floor(1 + Math.random() * 12);

$(document).ready(function () {
	$(".progress").knob({
		'min': 0, 
		'max': 5,
		'angleOffset': -60,
		'angleArc': 120,
		'readOnly': true,
		'width' : '100%',
		'thickness': 0.2,
		'lineCap': 'round',
		'displayInput' : false,
		'bgColor' : '#cde8ea',
		'fgColor' : '#991525'
	});
	
	$("#rules").slideUp();
	$(".slideRules").click(function () {
		$("#rules").slideToggle();
	});

	startRebus(num);

	// Code  that we must to write to check the answer
	
});


function startRebus (arg) {
	$("#picture").attr("src",`rebuses/${arg}.jpg`);
}