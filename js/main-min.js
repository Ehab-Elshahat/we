$(document).ready(function(){$(".nav-link").on("click",function(){$(".nav-link").removeClass("active"),$(this).addClass("active"),$(this).find(".chevron").toggleClass("rotate"),$(".chevron").hasClass("rotate")?$(this).parent(".nav-item").find(".sub-menu").show():$(this).parent(".nav-item").find(".sub-menu").hide()}),$(".toggler").on("click",function(){$(".nav-toggler").slideToggle()}),$(".slider").bxSlider({auto:!0,pager:!1,adaptiveHeight:!0}),$(".btn-watch").on("click",function(o){o.preventDefault(),$(".video-full").show()}),$(".close-video").on("click",function(){$(".video-full").hide()}),$(window).keydown(function(o){27==o.keyCode&&$(".video-full").hide()});var o=$(".scrolltop");$(window).scroll(function(){$(window).scrollTop()>300?o.show(500):o.hide(500)}),o.on("click",function(){$("html, body").animate({scrollTop:0},500)}),$(".counter").each(function(){var o=$(this),n=o.attr("data-count");$({countNum:o.text()}).animate({countNum:n},{duration:4e3,easing:"linear",step:function(){o.text(Math.floor(this.countNum))},complete:function(){o.text(this.countNum)}})}),$(".ser").hover(function(){$(this).children(".sub").show()},function(){}),$(".sub").mouseleave(function(){$(".sub").hide()}),$("body").niceScroll({cursorcolor:"#6861BC",cursorwidth:"8px",cursorborder:"none"})});