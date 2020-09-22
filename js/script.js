

// wow animation
new WOW({
  offset: 0,
}).init();


// slider

$(document).ready(function () {
  $(".your-class").slick({
    dots: true,
    slidesToShow: 2,
    slidesToRow: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
});


// Preloader
document.body.onload = function() {
  setTimeout(function() {
      let preloader = document.getElementById('page-preloader');
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done')
      }
  }, 1000);
}
