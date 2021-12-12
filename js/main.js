$(function(){

 $(".menu a, .footer__link").on("click", function (event) {
   //отменяем стандартную обработку нажатия по ссылке
   event.preventDefault();

   //забираем идентификатор бока с атрибута href
   var id = $(this).attr("href"),
     //узнаем высоту от начала страницы до блока на который ссылается якорь
     top = $(id).offset().top;

   //анимируем переход на расстояние - top за 1500 мс
   $("body,html").animate({ scrollTop: top }, 1500);
 });


$(".slider-blog__inner").slick({
  arrows: false,
  dots: true,
});

 $(".menu__btn").on("click", function () {
   $(".menu").toggleClass("menu--active");
 });

var mixer = mixitup(".portfolio__content");

});