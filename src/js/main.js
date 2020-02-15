let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
  easing: 'easeInOutCubic'
});

let mainNavOffsetTop = $('#main-nav').offset().top;

$(window).scroll(() => {
  //  console.log('windowScrollTop = %o', $(window).scrollTop());
  //  console.log('mainNavOffsetTop = %o', $('#main-nav').offset().top);
  //  console.log('mainNav = %o', $('#main-nav'));
  mainNavUpdate();
});


function mainNavUpdate() {

  if ($(window).scrollTop() > mainNavOffsetTop) {
    $('#main-nav').addClass("side-nav");
  } else if ($(window).scrollTop() <= mainNavOffsetTop) {
    $('#main-nav').removeClass("side-nav");
  }
}

mainNavUpdate();
