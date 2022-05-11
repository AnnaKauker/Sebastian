$('.hamburger-button').click(function(){
    $('.mobile-menu').slideToggle();
    $(this).toggleClass('active');
});

$("hide-mobile-menu").click(function(){
    $("mobile-menu").slideUp();
    $(this).toggleClass('inactive')
});




 $(".readmore-button").on('click' , function(){
  $(this).parent().toggleClass("showContent");
  //Shorthand if-else-statement
  var replaceText = $(this).parent().hasClass("showContent") ? "Weniger" : "Mehr";
  $(this).text(replaceText);
 });







  $('.testimonial-slider-container').slick({
	responsive: [
        {
    breakpoint: 2054,
    settings: {
        autoplay: true, // Do we want it to autoplay? true or false
        autoplaySpeed: 3000, // How long between each slide when auto-playing
        speed: 1000, // How fast is the transition in milliseconds
        arrows: true, // Do you want to show arrows to trigger each slide
        accessibility: true, // Enables keyboard tabbing and arrow key navigation
        dots: true, // Enables the dots below to show how many slides
        fade: false, // Changes the animate from slide to fade if true - false=good for Mobile
        infinite: true, // When true, means that it will scroll in a circle
        pauseOnHover: true, // When true means the autoplay pauses when hovering
        pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
            }
        },
        {
        breakpoint: 1554,
        settings: {
            autoplay: true, // Do we want it to autoplay? true or false
            autoplaySpeed: 3000, // How long between each slide when auto-playing
            speed: 1000, // How fast is the transition in milliseconds
            arrows: false, // Do you want to show arrows to trigger each slide
            accessibility: true, // Enables keyboard tabbing and arrow key navigation
            dots: true, // Enables the dots below to show how many slides
            fade: true, // Changes the animate from slide to fade if true - false=good for Mobile
            infinite: true, // When true, means that it will scroll in a circle
            pauseOnHover: true, // When true means the autoplay pauses when hovering
            pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
                }
            }
        ]   
    });