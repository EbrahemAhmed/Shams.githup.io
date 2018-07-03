$(document).ready(function(){
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
        
    });
    
    // when scroll body sticky navbar 
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 150){
          $('header').addClass('sticky , sty');
        }
        else {
            $('header').removeClass('sticky , sty ');
        }
        if(sc > 1981){ // cout to plugin 

            $('.time').countTo();
            $(window).off('scroll')
        }

        // ScrollTop 
        if(sc > 500) {

            $('.scrolltop').fadeIn();

        }
        else{

            $('.scrolltop').fadeOut();
        }

        //end Scroll Top
    });
// portfolio buttons change bacground
$('.buttons button').click(function(){

    $(this).addClass('active_btn').siblings().removeClass('active_btn');
    var CSSFilter = $(this).attr('id');
        if( CSSFilter==='all' ){
            $('.images > div').fadeIn();
        }else {
            $('.images > div').fadeOut();
            $('.images').contents().filter('.' + CSSFilter).fadeIn();
        }
}); 

// owl carosel 

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})  // end carosale 
 // section choose panel 
 $('.c-panel li').click(function(){
     $(this).addClass('active_btn').siblings().removeClass('active_btn')

    var p = $(this).data('role');

    $('.content > div ').hide();

    $('.content').contents().filter('#'+p).fadeIn();
    
 }); // end section choose panel 

 // strat video 
$('.pop').magnificPopup({
    type: 'iframe'
})

 // end video 
 
 // scroll to top
$('.scrolltop').click(function(){
    $('body,html').animate({
        scrollTop :0 
    },500);

});
// smoth Scroll 

$('.list a').click(function(){
    $('body,html').animate({

        scrollTop : $($(this).attr('href')).offset().top -80

    },500);
});

});
