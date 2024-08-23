$(document).ready(function(){
    $('.your-class').slick({
      infinite: true,       // Enables infinite scrolling
      slidesToShow: 3,      // Number of slides to show at once
      slidesToScroll: 1,    // Number of slides to scroll at a time
      dots: true,           // Enables navigation dots at the bottom
      arrows: true,         // Enables left and right navigation arrows
      autoplay: true,       // Enables automatic slide scrolling
      autoplaySpeed: 2000,  // Speed of autoplay in milliseconds (2 seconds)
      responsive: [         // Responsive settings
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2, // Show 2 slides at a time for screen widths <= 1024px
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1, // Show 1 slide at a time for screen widths <= 600px
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  