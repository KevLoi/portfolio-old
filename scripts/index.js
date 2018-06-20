$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(750,1);}
      } 
      // else { //object goes out of view (scrolling up)
      //   if ($(this).css("opacity")==1) {$(this).fadeTo(750,0);}
      // }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

$("#webSite").click(function() {
  alert("You are already on this website!");
});

$("#start").click(function() {
  $('html, body').animate({
    scrollTop: $("#education").offset().top
  }, 1000);
})
