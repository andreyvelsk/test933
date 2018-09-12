$(function() {

$fixed = $("#btncheck"), //меню десктоп

console.log($fixed);

$fixed.on("click", function (event) {
	//отменяем стандартную обработку нажатия по ссылке
	event.preventDefault();

	//забираем идентификатор бока с атрибута href
	var id  = $(this).attr('action'),

	//узнаем высоту от начала страницы до блока на который ссылается якорь
	top = $(id).offset().top;

		//анимируем переход на расстояние - top
	$('body,html').animate({scrollTop: top}, 700);

	$('.searchblock_input').focus();

	});      

});