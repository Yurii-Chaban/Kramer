// navigation
$(document).ready(function(){

        var $menu = $("header");

        $(window).scroll(function(){
          if ($(window).width() >= 600) {
            if ( $(this).scrollTop() > 610 && $menu.hasClass("static") ){
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("static")
                           .addClass("fixed")
                           .fadeIn('slow');
                });
            } else if($(this).scrollTop() < 610 && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("fixed")
                           .addClass("static")
                           .fadeIn('slow');
                });
            }
          }
        });
});


// highlight effect for navigation
 var topRange      = 200,  // measure from the top of the viewport to X pixels down
     edgeMargin    = 20,   // margin above the top or margin from the end of the page
     animationTime = 1200, // time in milliseconds
     contentTop = [];

$(document).ready(function(){ 

 // Stop animated scroll if the user does something
 $('html,body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(e){
 if ( e.which > 0 || e.type == 'mousedown' || e.type == 'mousewheel' ){
  $('html,body').stop();
 }
})

 // Set up content an array of locations
 $('#menu').find('a').each(function(){
  contentTop.push( $( $(this).attr('href') ).offset().top );
 })

 // Animate menu scroll to content
  $('#menu').find('a').click(function(){
   var sel = this,
       newTop = Math.min( contentTop[ $('#menu a').index( $(this) ) ], $(document).height() - $(window).height() ); // get content top or top position if at the document bottom
   $('html,body').stop().animate({ 'scrollTop' : newTop }, animationTime, function(){
    window.location.hash = $(sel).attr('href');
   });
   return false;
 })
 
 // adjust menu
 $(window).scroll(function(){
  var winTop = $(window).scrollTop(),
      bodyHt = $(document).height(),
      vpHt = $(window).height() + edgeMargin;  // viewport height + margin
  $.each( contentTop, function(i,loc){
   if ( ( loc > winTop - edgeMargin && ( loc < winTop + topRange || ( winTop + vpHt ) >= bodyHt ) ) ){
    $('#menu li')
     .removeClass('selected')
     .eq(i).addClass('selected');
   }
  })
 })
  
})