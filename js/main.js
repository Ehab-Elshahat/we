$(document).ready(function () {

  $('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active')
    $(this).addClass('active')
    //rotate chevron right
    $(this).find('.chevron').toggleClass('rotate')
    if ($('.chevron').hasClass('rotate')) {
      $(this).parent('.nav-item').find('.sub-menu').show()
    } else {
      $(this).parent('.nav-item').find('.sub-menu').hide()
    }
  })

  // toggle navbar
  $('.toggler').on('click', function () {
    $('.nav-toggler').slideToggle()
  })

  // slider
  $('.slider').bxSlider({
    auto: true,
    pager: false,
    adaptiveHeight: true,
  });

  //sectio video full screen 
  $('.btn-watch').on('click', function (e) {
    e.preventDefault();
    $('.video-full').show()
  })

  $('.close-video').on('click', function () {
    $('.video-full').hide()
  })

  $(window).keydown(function (e) {
    if (e.keyCode == 27) {
      $('.video-full').hide()
    }
  });

  // scroll to top
  var scrollTopBtn = $('.scrolltop')
  $(window).scroll(function () {

    if ($(window).scrollTop() > 300) {
      scrollTopBtn.show(500)

    } else {
      scrollTopBtn.hide(500)

    }
  })
  scrollTopBtn.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500)
  })

  // counter page about us 
  $('.counter').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {

        duration: 4000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      });
  });

  // dropdwon menu
  $(".ser").hover(function () {
    $(this).children('.sub').show()
  }, function () {

  });

  $('.sub').mouseleave(function () {
    $('.sub').hide()
  })

  // naice scroll body
  $("body").niceScroll({
    cursorcolor: "#6861BC",
    cursorwidth: "8px",
    cursorborder: "none"
  });

  // login form 
  var elements = $('.input-val');
  var placeval;

  $(elements).focus(function (e) {
    e.preventDefault();

    placeval = $(this).attr('placeholder')
    var placeholder = $(this).attr('placeholder', '')

  });


  $(elements).blur(function (e) {
    e.preventDefault();

    if (elements.val() == '') {
      $(this).attr('placeholder', placeval)
      $(this).next('.erorr').fadeIn().delay(2000).fadeOut()
    }
  });

  // show hide passward
  $('.eye').on('click', function () { 

    var inputTypePass = $(this).parent('.group').find('.input-val')

    if(inputTypePass.attr("type") === "password") {

      inputTypePass.attr('type', 'text')

    } else {

      inputTypePass.attr('type', 'password')
    }

    
  });
  

});


// animate page
wow = new WOW(
  {
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  }
)

new WOW().init();