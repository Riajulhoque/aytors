$(function(){
$('#banner_cnt').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows:false,
});

$('.topSlider').slick({
  arrows:false,
  asNavFor: '.bottomSlider',
});

$('.bottomSlider').slick({
  // arrows:false,
  focusOnSelect: true,
  slidesToShow: 5,
  asNavFor: '.topSlider',

});

$('#new_product_slider').slick({
  infinite: true,
  slidesToShow: 4,
  speed:300,
  prevArrow:'#left_slide',
  nextArrow:'#right_slide',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
  
  });
$('.new_latest_card').slick({

  dots: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows:false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
 
  
});
})
// bumper offers
$('.bumper_slider').slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
			
$(function(){
  $(window).scroll(function(){
    let srcTop = $(window).scrollTop()
    if( srcTop > 900){  $(".navbar").addClass('manuActive');
    $(".scrollToTop").slideDown();
  
  }
    else{ $(".navbar").removeClass('manuActive');
    $(".scrollToTop").slideUp();
  }

  })
  
})
$(".scrollToTop").click(function (){
  $('html,body').animate({ scrollTop:0}, 3000)
});

 
  

    
            
  
// tooltip 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//tooltip ends
