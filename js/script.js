$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    })
});

$(function(){
    new WOW().init();

});
$(function(){
AOS.init();
});

$('.menu_works').click(function() {
    $("html,body").animate({scrollTop:$(".portfolio_section").offset().top});
    $('#overlay').removeClass("open");
    $('html div').removeClass("blur");
    $("#toggle").toggleClass("active");
  });


$(function(){

    $('.nav-item a').hover(function(){
        $(this).css('color','#f6b403');
    }, function(){
        $(this).css('color','black');
    
    });
});
$(function(){

    $('.cmn-link a').hover(function(){
        $(this).css('background','white');
        $(this).css('color','#f6b403');
        $(this).css('border','1px solid #f6b403');
    }, function(){
        $(this).css('background','#f6b403');  
        $(this).css('color','white');
    
    });
});
$(function(){

    $('.cmn-link').hover(function(){
    
        $(this).css('box-shadow','0 0 0 rgba(0, 0, 0, 0.3)');
       
        
    }, function(){
        $(this).css('box-shadow','4px 4px 4px rgba(0, 0, 0, 0.3)');

    
    });
});

$(function() {
    $('.cmn-link').mouseover(function() {
      $('.arrow').addClass("-active");
      })
    $('.cmn-link').mouseout(function() {
      $('.arrow').removeClass("-active");
      })
  });

  $(function(){
    $('.js-accordion').on('click',function(){
        $(this).next().slideToggle();
    })
});