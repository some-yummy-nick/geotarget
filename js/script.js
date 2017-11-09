$(document).ready(function () {

	addVoidForLinks($("a"));
	scrollLinks($("a"));
	setEqualHeight($(".row>.col"));

	$(".js-menu-icon").bind("click", function () {
		$(this).toggleClass("active");
		$(".js-menu").toggleClass("active");
		$(this).find("div").removeClass("no-animation");
	});

	$(".js-gallery-touch__list").each(function () {
		var g = new GalleryTouch();
		g.init({
			element: this
		});
		g.enable();
	});

	$("[type=tel]").mask("+7 (999) 999-99-99");



	(function () {
		validate.init({
			messageTypeMismatchEmail: 'Пожалуйста внесите корректный email',
			messageValueMissing: 'Пожалуйста заполните поле'
		});

		var field = document.querySelectorAll('input');

		Array.prototype.forEach.call(field, function (child) {
			child.addEventListener("input", function () {
				validate.removeError(child);
			})
		});
	})();


});