$('.main-menu nav').meanmenu();
var owl = $('.banner-slider');
	owl.owlCarousel({
	items: 1,
	loop: true,
	autoplay: true,
	nav: true,
	navText : ["<span class='slider-arrow arrow-left'>Previous</span>","<span class='slider-arrow arrow-right'>Next</span>"],
	responsive: {
        0: {
            dots:true,
        },
        576: {
            dots:false,
        }
    }
});
 
var award = $('.award-slider');
  award.owlCarousel({
  margin: 10,
  nav: false,
  responsive: {
        0: {
            items: 1,
        },
        480: {
            items:1,
        },
        650: {
            items:1,
        },
        992: {
            items:2,
        }
    }
});
var counted = 0;
$(window).scroll(function() {
  
  var offset = $('.counter-main').offset(); 
  var oTop = offset.top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.counter-number').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});

/* Image set as background ===================== */
function setbg(){
  $(".setbg").each(function(){
    var theBg = $(this).find(".bg-img").attr("src"); 
    $(this).css('background-image', 'url(' + theBg + ')');
    $(this).find("img.bg-img").hide();
  });
}
setbg();
 
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
 