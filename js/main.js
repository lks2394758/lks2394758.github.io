AOS.init({
  duration: 600
});



(function($) {

	'use strict';
  
  $(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });
	// bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // navigation
  var OnePageNav = function() {
  var navToggler = $('.navbar-toggler');
  $(".smoothscroll[href^='#'], #myNavbar ul li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
      
    $('html, body').animate({

      scrollTop: $(hash).offset().top
    }, 1000, 'easeInOutExpo', function(){
      window.location.hash = hash;
    });
  });
  

  $(".nav-item").on('click', function(){
    if($(".navbar-toggler").is(':visible')){
      $(".navbar-toggler").click();
    }
  });
  // $('body').on('activate.bs.scrollspy', function () {
  //   console.log('nice');
  // })
  };
  OnePageNav();

  // $(window).scroll(function() {

  //   var $this = $(this),
  //     st = $this.scrollTop(),
  //     navbar = $('.site-header');

  //   if (st > 150) {
  //     if ( !navbar.hasClass('scrolled') ) {
  //       navbar.addClass('scrolled');  
  //     }
  //   } 
  //   if (st < 150) {
  //     if ( navbar.hasClass('scrolled') ) {
  //       navbar.removeClass('scrolled sleep');
  //     }
  //   } 
  //   if ( st > 350 ) {
  //     if ( !navbar.hasClass('awake') ) {
  //       navbar.addClass('awake'); 
  //     }
  //   }
  //   if ( st < 350 ) {
  //     if ( navbar.hasClass('awake') ) {
  //       navbar.removeClass('awake');
  //       navbar.addClass('sleep');
  //     }
  //   }

  // }); 


  // $('.js-site-nav-toggle').on('click', function(e) {

  //   var $this = $(this);
  //   e.preventDefault();

 

  //   if ( $('body').hasClass('menu-open') ) {
  //     $this.removeClass('active');
  //       $('.site-menu .site-menu-inner > ul > li').each(function(i) {

  //         var that = $(this);
  //         setTimeout(function() {
  //           that.removeClass('is-show');
  //         }, i * 100);

  //         // $(this).removeClass('is-show');
  //       });
      
  //     setTimeout(function() {
  //       // $('.site-menu').fadeOut(400);
  //       $('.site-menu').removeClass('site-menu-show');
  //     }, 800);

  //     $('body').removeClass('menu-open');
  //   } else {

  //     // $('.site-menu').fadeIn(400);
  //     $('.site-menu').addClass('site-menu-show');

  //     $this.addClass('active');
  //     $('body').addClass('menu-open');

  //     setTimeout(function() {
  //       $('.site-menu .site-menu-inner > ul > li').each(function(i) {
  //         var that = $(this);
  //         setTimeout(function() {
  //           that.addClass('is-show');
  //         }, i * 100);

  //       });
  //     }, 500);
      
  //   }

  // });
	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

  $('.home-slider-loop-false').owlCarousel({
    loop:false,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
  });

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
  	}
	});


  $('.centernonloop').owlCarousel({
    center: true,
    items: 1,
    loop: false,
    margin:10,
    dots: true,
    responsive:{
      600:{
        items: 3
      }
    }
  });

  $('#date').datepicker({
    'format': 'm/d/yyyy',
    'autoclose': true
  });
  $('#time').timepicker();

  $('.modalSourceImg').click(function(){
    $('#myModal').css("display", "block");
    var src = $(this).attr('src');
    $('#modalImg').attr("src",src);
  });


  $('.close').click(function(){
    $('#myModal').css("display","none");
  });

  $('#reserve-btn').click(function(){
      var phone = $('#phone').val();
      var selectDiv = document.getElementById('persons');
      var persons = selectDiv.options[selectDiv.selectedIndex].text;
      var date = $('#date').val();
      var time = $('#time').val();
      var name = $('#name').val();
      if(phone != '' && persons != '' && date != '' && time != '' && name != ''){
        var email = 'mailto:yunzhuangvan@gmail.com';
        var mailstring = 'mailto:'+email+'?subject=Reservation'+'&body='+name+' want to reserve table for '+
        persons + ' on ' + date +' '+ time + ', phone number is '+phone;
        location.href=mailstring;
      }else{
        alert('Please enter all infomation to reserve a table');
      }
  });
})(jQuery);

// var bgImageArray = ['images/headImage.jpeg','images/headImage2.jpeg','images/headImage3.jpeg'];
// var secs = 4;
// bgImageArray.forEach(function(img){
//   new Image().src = img;
// }); 
// function backgroundSequence() {
//   window.clearTimeout();
//   var k = 0;
//   for (i = 0; i < bgImageArray.length; i++) {
//     setTimeout(function(){ 
//       document.getElementById("cover_bg").style.background = "url(" + bgImageArray[k] + ")";
//     if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
//     }, (secs * 1000) * i)	
//   }
// }
// backgroundSequence();