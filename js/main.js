$(function(){

	// Видео
  $('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	// Слайдер
  $('.gallery__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/gallery-arrow-left.svg"/></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/gallery-arrow-right.svg"/></button>',
  });

  $('.gallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		
	});

// Кнопка меню мобильной версии
	$('.menu__btn').on('click', function(){
   $('.menu__list').toggleClass('menu__list--active');
	});

// Скроллинг с от раздела .header к разделу .direction
$(".header__scroll-down").on("click","a", function (event) {
	//отменяем стандартную обработку нажатия по ссылке
	event.preventDefault();

	//забираем идентификатор бока с атрибута href
	var id  = $(this).attr('href'),

	//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
	
	//анимируем переход на расстояние - top за 1000 мс
	$('body,html').animate({scrollTop: top}, 1000);
});
});