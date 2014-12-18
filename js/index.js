$(document).ready(function(){
  $('.slick-facebook, .slick-twitter, .slick-instagram').slick({
    autoplay : true,
    autoplaySpeed : 4000,
    arrows : false,
    dots: true,
    fade: true
  });
});

$(document).foundation();

$('.more').readmore({
  maxHeight : 193,
  moreLink: '<a href="#" class="button readmore">Read more</a>',
  lessLink : '<a href="#" class="button readmore">Read less</a>',
  sectionCSS: ''
});